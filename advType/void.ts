// ничего не вернет
function logId(id: string | number): void {
    console.log(id);
}

// const a = logId(1);

function multiply(f: number, s?: number): number {
    if (!s) {
        return f * f
    }
    return f * s
}

// можем вернуть все что угодно, но его игнорируем
type voidFunction = () => void;

const f1: voidFunction = () => {
}

const f2: voidFunction = () => {
    return true
}

const skills6 = ['Dev', 'DevOps']

const user8 = {
    s: ['']
}

skills6.forEach(skill => user8.s.push(skill))