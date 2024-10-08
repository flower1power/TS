interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconndect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconndect(): void {
    console.log('Отключение TG');
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconndect(): void {
    console.log('Отключение WhatsUp');
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconndect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }

  sendDelaytes() {}
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();
