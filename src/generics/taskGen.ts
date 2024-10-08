function returnToString<T>(data?: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }

  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'boolean':
    case 'function':
      return data.toString();
    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }

}

const res5 = returnToString([1, 2, 3]);
console.log(res5, typeof res5);