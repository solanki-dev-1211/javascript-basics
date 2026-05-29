// array
const myarr=[0,1,2,3,4,5]
const Frutes=['banana','mango','apple']
const Cartoon=['ben10','chottabheem','doremone','shinchin']

// console.log(myarr[3])
// console.log(Frutes)
// console.log(Cartoon[0])

// array methods  
// myarr.push(6)//add values
// myarr.pop()//remove last values
// myarr.shift()//remove starting  values
// myarr.unshift(9)//add in starting value

// console.log(myarr.includes(5))//add value
// console.log(myarr.indexOf(4))//show index place

// const newArr =myarr.join()
// console.log(newArr)
// console.log(typeof newArr)

// slice,splice 
console.log("A" ,myarr)

const myarr2 = myarr.slice(1,3)
console.log(myarr2);    

console.log("B" ,myarr)
const myarr3=myarr.splice(1,3)

console.log("C" ,myarr)
console.log(myarr3)
