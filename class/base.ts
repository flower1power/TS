class User14 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user14 = new User14('Viktor');
console.log(user14);
user14.name = 'Vova';
console.log(user14);

class Admin1 {
  role: number;
}

const admin1 = new Admin1();
admin1.role = 1;
