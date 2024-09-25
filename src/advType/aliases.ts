type httpMethods = 'GET' | 'POST';

function fetchWithAuth2(url: string, method: httpMethods): string {
  return `${url} ${method}`;
}

fetchWithAuth('s', 'POST');

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

//? интерсекшен
type UserRole = User & Role; // Удалит один name

// будет name и там и там
type UserWithRoles = {
  user: User;
  role: Role;
};

const user1: User = {
  name: 'user',
  age: 33,
  skills: ['1', '2'],
};

const user2: UserRole = {
  name: 'user',
  age: 33,
  skills: ['1', '2'],
  id: 1,
};

const user3: UserWithRoles = {
  user: {
    name: 'user',
    age: 33,
    skills: ['1', '2'],
  },
  role: {
    name: 'role',
    id: 1,
  },
};
