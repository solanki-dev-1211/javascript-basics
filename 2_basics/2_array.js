const marvel_heros =["spiderman","thor","ironman"]
const dc_heros=["flash","batmen","superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros);

// spred that is use to splitt into single 
const all_new_heros=[...allHeros, ...dc_heros]
console.log(all_new_heros);

// flat is use to multiple array in single array convert into one array
const anotherArr=[1,2,3,[4,5,6,[7,8,9]]]

const realArr=anotherArr.flat(Infinity)
console.log(realArr);

console.log(Array.isArray("dev"));


// from convert values in array
console.log(Array.from("dev"))

// of return new elements set of elements
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
