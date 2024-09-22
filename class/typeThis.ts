class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const res3 = new UserBuilder().setName('LV');
const res4 = new AdminBuilder().setName('ADMIN LV');

let user9: UserBuilder | AdminBuilder = new UserBuilder();

if (user9.isAdmin()) {
  console.log(user9);
} else {
  console.log(user9);
}
