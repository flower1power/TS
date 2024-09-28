let sringOrnumber: string | number = 5;

if (Math.random() > 0.5) {
  sringOrnumber = 5;
} else {
  sringOrnumber = 'str';
}

if (typeof sringOrnumber === 'string') {
  console.log(sringOrnumber);
} else {
  console.log(sringOrnumber);
}

let strOrNum: typeof sringOrnumber;

const user23 = {
  name: 'Vasya',
};

type keyOfUser23 = keyof typeof user23;

enum Direction {
  Up,
  Down,
}

type d = keyof typeof Direction;
