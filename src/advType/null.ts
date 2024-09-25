const n: null = null;
const n1: any = null;
const n2: unknown = null;

// не получится
// const n3: number = null;
// const n4: string = null;
// const n5: boolean = null;
// const n6: undefined = null;

interface User10 {
  name: string;
}

// null - обьекта нет, undefined - обьект пока не задан

// если мы осознано говорим что его нет, то null

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: 'Viktor',
    } as User10;
  }
}

const user10 = getUser();
const qq = user10?.name;
