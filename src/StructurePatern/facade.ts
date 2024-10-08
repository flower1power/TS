class Notfy {
  send(template: string, to: string) {
    console.log(`Отправляю ${template} ему ${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [{ name: 'other', template: '<h1>Шаблон</h1>' }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notfy;
  private logger: Log;
  private template: Template;

  constructor() {
    this.notify = new Notfy();
    this.template = new Template();
    this.logger = new Log();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log('Не найден шаблон');
      return;
    }

    this.notify.send(data.template, to);
    this.logger.log('Шаблон отправлен');
  }
}

const servise = new NotificationFacade();

servise.send('qwert@mil.ru', 'other');
