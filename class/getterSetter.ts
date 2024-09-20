class User20 {
  _login: string;
  password: string;
  createdAt: Date;

  // getLogin(l: string) {
  //   this._login = 'user-' + l;
  // }

  //! что возвращает get, то дожен принимать set
  // вызывается не как функция и при обращении
  // к user.login = вернет перезапишет
  set login(l: string | number) {
    this._login = 'user-' + l;
    this.createdAt = new Date();
  }

  //? если есть только get то login - ReadOnly
  // вызывается не как функция и при обращении
  // к user.login вернет что указано
  get login() {
    return 'get-';
  }

  //* set get не могут быть asinc
}

const user20 = new User20();
user20.login = 'myLogin';
console.log(user20);
console.log(user20.login);
