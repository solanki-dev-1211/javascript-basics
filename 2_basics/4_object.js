// singleton object 
const tinderName=new Object()

// non singleton object
// const tinderName={}
const tinderUser={}

tinderUser.id="123abs"
tinderUser.name = "sam"
tinderUser.loggedin=true

// console.log(tinderUser)

// call the sub variables open nested var and call it
const randomUser={
    email:"dex@gmail.com",
    user:{
        userfullname:{
            firstName:"dev",
            lastName:"solanki"
            

        },
        address:{
            fulladdress:{
                contry:"india",
                state:"gujrat",
                city:"ahmedabad"
            }

        }
    }
}
console.log(randomUser.user.userfullname.firstName);
console.log(randomUser.user.address.fulladdress);



// marge object //asign method throw asign obj
// jab new obje t declear karo to empty obj first declare karo like
// const obj4=Object.assign({},obj1,obj2,obj3)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4 :"b"}
const obj3={5:"e",6 :"f"}

// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4);
const obj5={...obj1, ...obj2}//spred the obj
console.log(obj5);

// convert into obj to array 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// check property are avaleble or ot 
console.log(Object.entries.hasOwnProperty('name'));

