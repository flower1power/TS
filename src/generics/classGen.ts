class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }
    if (error) {
      this.error = error;
    }
  }
}

const res6 = new Resp<string, number>('data', 0);

class HTTPResp<F> extends Resp<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const resp7 = new HTTPResp();
