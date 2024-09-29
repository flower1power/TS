const a3: number = Math.random() > 0.5 ? 1 : 0;

interface HHTPResponse<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
  // additinialData: T extends 'success' ? string : number;
}

const suc: HHTPResponse<'success'> = {
  code: 200,
  data: 'done',
};

const err: HHTPResponse<'failed'> = {
  code: 200,
  data: new Error(),
};

class User25 {
  id: number;
  name: string;
}

class UserPersistend extends User25 {
  dbId: string;
}

function getUser1(Id: number): User25;
function getUser1(dbId: string): UserPersistend;
function getUser1(dbIdOrId: string | number): User25 | UserPersistend {
  if (typeof dbIdOrId === 'number') {
    return new User25();
  } else {
    return new UserPersistend();
  }
}

type User25OrUserPersistend<T extends string | number> = T extends string
  ? UserPersistend
  : User25;

function getUser2<T extends string | number>(id: T): User25OrUserPersistend<T> {
  if (typeof id === 'number') {
    return new User25() as User25OrUserPersistend<T>;
  } else {
    return new UserPersistend() as User25OrUserPersistend<T>;
  }
}

getUser2(1)
getUser2('')
