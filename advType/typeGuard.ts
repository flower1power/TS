interface User12 {
  name: string;
  email: string;
  login: string;
}

const user12: User12 = {
  name: 'John',
  email: 'john@gmail.com',
  login: 'john123',
};


interface Admin1 {
  name: string;
  role: number;
}

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

function isString(x: string | number): x is string {
  return typeof x === 'string';
}


function setRoleZero(user: User12 | Admin1) {
  if (isAdmin(user)) {
    console.log('Admin');
    user.role = 0;
  } else {
    throw new Error('Пользователь не является администратором');
  }
}

// Варианты typeGuard
function isAdmin(user: User12 | Admin1): user is Admin1 {
  return 'role' in user;
}

function isAdminAlt(user: User12 | Admin1): user is Admin1 {
  return (user as Admin1).role !== undefined;
}