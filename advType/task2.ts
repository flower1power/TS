interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus1 {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus1.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus1.Failed;
  data: IDataFailed;
}

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(resp: Res): resp is IResponseSuccess {
  return resp.status === PaymentStatus1.Success;
}

function getID(resp: Res): number {
  if (isSuccess(resp)) {
    return resp.data.databaseId;
  } else {
    throw Error('ID not found');
  }
}