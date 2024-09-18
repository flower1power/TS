interface User1 {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string;
}

interface Role1 {
    roleId: number;
}

interface UserWithRoles1 extends User1, Role1 {
    createdAt: Date;
}

type User2 = {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string;
};

const user4: User1 = {
    name: "user",
    age: 33,
    skills: ["1", "2"],

    log() {
        return "";
    },
};

const user5: UserWithRoles1 = {
    name: "user",
    age: 33,
    skills: ["1", "2"],
    roleId: 1,
    createdAt: new Date(),

    log() {
        return "";
    },
};

//* может быть сколько угодно свойств где 0:User
interface UserDic {
    [index: number]: User1;
}

type UserDic1 = Record<number, User1>;
