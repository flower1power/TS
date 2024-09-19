//* Функция никогда не вернется
function generateError(msg: string): never {
  throw new Error(msg);
}

function dumpError(): never {
  while (true) {
  }
}

function rec(): never {
  return rec();
}

type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      break;
    case 'checkout':
      break;
    default:
      // прикольная проверка при сужении
      // const _: never = action;
      throw new Error('Нет такого action');
  }
}


function isString1(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  generateError('qqq');
}