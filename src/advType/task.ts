// Запрос в виде платежа
// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// Ответ
// {
//     "status": "success",
//     "data": {
//     "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
// }
// },
// {
//     "status": "failed",
//     "data": {
//     "errorMessage": "Недостаточно средств",
//         "errorCode": 4
// }
// }

//! мое решение
// interface IRequest {
//     sum: number,
//     from: number,
//     to: number
// }
//
// interface DataRequestSuc extends IRequest {
//     databaseId: number;
// }
//
// interface DataRequestFail {
//     errorMessage: string,
//     errorCode: number
// }
//
// type status = "success" | "failed"
//
// interface DataResponse {
//     status: status
//     data: DataRequestSuc | DataRequestFail
// }
//
//
// const req1: IRequest = {
//     sum: 10000,
//     from: 2,
//     to: 4
// }
//
//
// const res1: DataResponse = {
//     status: "success",
//     data: {
//         databaseId: 567,
//         sum: 10000,
//         from: 2,
//         to: 4
//     }
// }
//
// const res6: DataResponse = {
//     status: "success",
//     data: {
//         errorMessage: "Недостаточно средств",
//         errorCode: 4
//     }
// }

//! школа

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

const enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}
