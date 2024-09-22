// не требует создания инстанса
class UserService {
  static db: any;

  static getUser(id: number) {
    return UserService.db.find(id);
  }

  constructor(id: number) {

  }

  create() {
    UserService.db;
  }

  static {
    UserService.db = 'TEST';
  }
}

UserService.getUser(1);
const instance = new UserService(1);
instance.create();