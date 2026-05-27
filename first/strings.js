const name="dev"
const repoCount=5

// old method
// console.log(name + repoCount +"valuse")

console.log(`my name is ${name} my repo count is ${repoCount}`);

const GameName = new String("DevSolanki")

console.log(GameName[0])
console.log(GameName[1])
console.log(GameName[2])
console.log(GameName.__proto__);
console.log(GameName.length)
console.log(GameName.toLowerCase())
// position
console.log(GameName.charAt(2))

console.log(GameName.indexOf('v'))

const newString=GameName.substring(0,4)
console.log(newString)

const anotherString=GameName.slice(-8,4)
console.log(anotherString)

// trim remove the spaces
const myTrim=("    dev    ")
console.log(myTrim.trim())

// replace
const url="htttp://gogles.come"
console.log(url.replace('htttp','http'));

// includes - value is avalabele or not
console.log(url.includes('gogles'));
