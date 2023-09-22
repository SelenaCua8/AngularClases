

function addNumbers(a: number, b: number):number{
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
   return `${ a + b }`;
}

const result: number = addNumbers(1, 2)

const result2: string = addNumbersArrow(5, 10);

console.log({ result, result2})






export{}