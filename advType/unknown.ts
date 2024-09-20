let input: unknown;

// input = 3;
input = ['qe', 'qwe'];

//* нельзя присвоить типу до приведения
// let res: string = input

//* нельзя сузить тип
function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  } else {
    i;
  }
}

run(input);

async function getData() {
  try {
    await fetch('');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

//? плохой вариант
async function getDataForce() {
  try {
    await fetch('');
  } catch (error) {
    // const e = error as Error
  }
}

// любой юнион с unknown - всегда unknown
type U1 = unknown | null;

// любой интерсекшен с unknown - сужение = string
type I1 = unknown & string;
