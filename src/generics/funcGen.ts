function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res1 = logMiddleware<number>(10);


function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;

  return data.splice(0, l);
}

getSplitedHalf<number>([1, 2, 3, 4, 5]);

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;


// imterface ILogLine {}

const logLine = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};