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