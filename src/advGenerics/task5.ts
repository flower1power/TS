/*
 * Необхадимо сделать тип для результата валидации
 * формы, основываясь на типе формы
 */

//! MAp
interface Ifrom {
  name: string;
  password: string;
}

const from: Ifrom = {
  name: 'Вася',
  password: '123',
};

const formValidation = {
  name: { isValid: true },
  password: { isValid: false, errorMassage: 'Должен быть длинее 5 символов' },
};

interface IValidField {
  isValid: true;
}

interface IInValidField {
  isValid: false;
  errorMassage: string;
}

type FieldValidate = IValidField | IInValidField;

type fromToAcces<T> = {
  [K in keyof T]: FieldValidate;
};

type fromToAcces2<T> = {
  [K in keyof T]: { isValid: true } | { isValid: false; errorMassage: string };
};

type UserAcces = fromToAcces<Ifrom>;
type UserAcces3 = fromToAcces2<Ifrom>;
