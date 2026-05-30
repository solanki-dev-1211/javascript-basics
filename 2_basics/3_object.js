// singleton

// constructor method to create a object
// Object.create

// object literals

const mysymb=Symbol("myKey")
const jsUser={
    name:"dev",
    [mysymb]:"mykey1",
    age:21,
    location:"ahmedabad",
    email:"dev@gmail.com",
    islogddin:false,
    lastloginDay:["mon","tue","wen","thu","fri","sat","sun"]

}
console.log(jsUser);
// two type to called key values

console.log(jsUser.email);
console.log(jsUser["email"]);

// change values
jsUser.email="dEv@gmail.com"
console.log(jsUser );

// freeze values
// Object.freeze(jsUser)

jsUser.greeting=function(){
    console.log("hellow world");
    
}
// object call refreance
jsUser.greetingTwo = function(){
    console.log(`hellow world ${ this.email}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

