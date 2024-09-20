interface IPayment1 {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus1 {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest1 extends IPayment1 {}

interface IDataSuccess1 extends IPayment1 {
  databaseId: number;
}

interface IDataFailed1 {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess1 {
  status: PaymentStatus1.Success;
  data: IDataSuccess;
}

interface IResponseFailed1 {
  status: PaymentStatus1.Failed;
  data: IDataFailed;
}

type Res = IResponseSuccess1 | IResponseFailed1;

function isSuccess(resp: Res): resp is IResponseSuccess1 {
  return resp.status === PaymentStatus1.Success;
}

function getID(resp: Res): number {
  if (isSuccess(resp)) {
    return resp.data.databaseId;
  } else {
    throw Error('ID not found');
  }
}
