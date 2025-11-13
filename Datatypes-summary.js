/* Primitive Datatypes
 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt */

 const score = 100;
 const scoreValue = 100.2;

 const isLoggedIn = false;
 const outsideTemp = null;
 let userEmail;

 const id = Symbol('123');
 const anotherId = Symbol('123');

 console.log(id === anotherId);

const bigNumber = 89797643545468794346878n
console.log(typeof bigNumber);

 

/* Referance Datatype (Non primitive)
Array, Objects, Functions */

const heros = ["saktiman", "naagraj", "doga"]

let myObject = {
    name:"sonu",
    age: 21,
}

console.log(myObject);

const myfunction = function logger(){
    console.log("Hello World");
}
myfunction();
console.log(myfunction);
console.log(typeof myfunction);


console.log(typeof outsideTemp);

/*
undefined => "undefined "
Null => "Object"
Boolean => "boolean"
Number => "number"
String => "string"
Symbol => "symbol"
BigInt => "bigint"
object (native does not implement [[call]]) => "object"
object (native or host and does implement [[call]]) => "function"
object (host and does not implement [[call]]) => implementation define except may not be "undefined","boolean", "number" or "string".
*/






//JS (JavaScript) is a high-level, interpreted, dynamically typed, multi-paradigm programming language.