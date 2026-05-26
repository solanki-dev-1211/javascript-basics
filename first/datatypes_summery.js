// javascript is dynamic type languagen
// primitive datatpe 
// 7 types string,boolen,number,null,undefind,symbol,BigInt

const score = 100
console.log(typeof score)

const scoreValue=10.5
console.log(typeof scoreValue)

const isLOggedIn=false 
console.log(typeof isLOggedIn)

const outSaidTemp = null
console.log(typeof outSaidTemp)

let userEmail;
console.log(typeof userEmail)

const id =Symbol("123")
const anotherId =Symbol("123")

console.log(id === anotherId)
console.log(typeof id)
console.log(typeof anotherId)


const bigInteger=1234567891012345678910n
console.log(typeof bigInteger)
 
// refrence tpye (nonprimitive)
// array,object,function

// array 
const heros=["shaktiman","mighty raju","chota bheem"];
console.log(typeof heros)

// Object
let myobj= {
    name : "dev",
    age:21
}
console.log(typeof myobj)

// function 
const myFunction = function(){
    console.log("hello dev!");

}
console.log(typeof myFunction)