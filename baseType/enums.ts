const enum StatusCode {
    SUCCESS = 1,
    IN_PROGRESS = 2,
    FAILED = 3
}

const res2 = {
    message: 'YES',
    statusCode: StatusCode.SUCCESS,
}


//1 - успех
//2 - в процессе
//3 - отклонен

if (res2.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {
    return
}

action(StatusCode.SUCCESS)

function compute() {
    return 3
}

enum Roles {
    ADMIN,
    USER = compute()
}

