interface User3 {
    name: string;
}

// если название одно - соединяется
// type будет ругаться
interface User3 {
    age: number;
}

const user6: User3 = {
    name: "LC",
    age: 33,
};


type ID = string | number;

interface IDI {
    ID: string | number;
}

// type для примитивов
// interface - для обьектов