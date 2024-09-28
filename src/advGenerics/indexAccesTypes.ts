interface Role1 {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface User24 {
  name: string;
  roles: Role1[];
  permission: Permission;
}

const user24: User24 = {
  name: 'Visya',
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

const nameUser24 = user24['name'];
const roleNames = 'roles';
let roleNames2 = 'roles';

type rolesType = User24['roles'];
type rolesType2 = User24[typeof roleNames];

type roleType = User24['roles'][number];
type dateType = User24['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const;
type roleTypes = (typeof roles)[number];
