type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

//берем каждый ключ из роли и ему соответсвует boolen
//? +-? меняет обязательность
//? +readonly все становятся readonly
//? as `canAcces${string & Property}` - добавляет к названию свойства
//? Exclude<> исключает что-то
type ModifierToAcces<Type> = {
  +readonly [Property in keyof Type as Exclude<
    `canAcces${string & Property}`,
    'canAccesadminPanel'
  >]+?: boolean;
};

type UserAcces2 = ModifierToAcces<UserRoles>;

// type UserAcces1 = {
//   customers?: boolean;
//   projects?: boolean;
//   adminOanel?: boolean;
// };
