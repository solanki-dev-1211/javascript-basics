// coversion of string to number
//"10abc"=>NaN
//true=>1 false=>0

let score="1o0abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let someNumber=33

let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)   


// oprations
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
