let a5 = 5;
let b: string = a5.toString();

let e: string = new String(a5).valueOf();
let f: boolean = new Boolean(a5).valueOf();

let c1 = 'asdads';
let d1: number = parseInt(c1);

interface User11 {
  name: string;
  email: string;
  login: string;
}

const user11: User11 = {
  name: 'John',
  email: 'john@gmail.com',
  login: 'john123',
};

// as User11
// <User11> - нельзя в React


interface Admin {
  name: string;
  role: number;
}

// сделали из пользователя User11 - Admin,
// но сохранили поля из User11 - что не надо
const admin: Admin = {
  ...user11,
  role: 1
};

//! верный вариант - создать функцию маппинга
function userToAdmin(user: User11): Admin {
  return {
    name: user.name,
    role: 1,
  };
}