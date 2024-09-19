interface User7 {
  login: string;
  password?: string;
}

const user7: User7 = {
  login: 'admin',
};

function multiply1(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }

  return first * second;
}

multiply(5);
multiply(5, 5);


interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary'
  };
}

function testPass(user: UserPro) {
  return user.password?.type;
}

function test(param?: string) {
  // если param null || undefined то multiply
  return param ?? multiply(5);
}