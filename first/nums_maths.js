const score=100

const Balance= new Number(100)
console.log(Balance);


console.log(Balance.toString().length)

// use  in e commerce web 
console.log(Balance.toFixed(2))

// toPrecision 
const otherNumber=123.45677
console.log(otherNumber.toPrecision(5));

// automatic add ',' in numbers
const Income=1000000
console.log(Income.toLocaleString('en-IN'));

// mathss

console.log(Math);

// abs converst into nagative to positive
console.log(Math.abs(-7));
// ceiling choose low value
console.log(Math.floor(4.6));
// ceiling choose top value
console.log(Math.ceil(4.2));
console.log(Math.round(4.6));
console.log(Math.min(4,3,5,6,7)); 
console.log(Math.max(4,3,5,6,7)); 


// math give me o or 1 values
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);



const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min +1))+min)
console.log(Math.sqrt(25));

