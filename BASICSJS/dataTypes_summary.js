// Data types are classfied into 2 types depending upon how they are stored in memory and accessed :
// 1)primitive(call by value)
// 2)Non primitive(Reference- reference can be assigned directly in memory)
//PRimitive types: String, Number, Boolean, null, undefined, BigInt, Symbol
//Non primitive data types: array, object, functions - typeof these values give object

//JS is dynamically typed language

//e.g Symbols provide unique return value
const ID=Symbol('123')
console.log(ID)

const ID2=Symbol('123')
console.log(ID2)

console.log(ID===ID2)


//Array
const arr=["abc", "def", "ijk"]

//Obj key value pair
let obj={
    name:"Dipin",
    age:23
}


//function

const myFun= function(){
    console.log("Hello World!")
}

myFun()