let score  = "33abc" //output : NaN

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)); // output number

console.log(valueInNumber);

let num = null // output 0
let valueNumber = Number(num) 
console.log(typeof(valueNumber));// output number

console.log(valueNumber);


let one = undefined; // Output NaN
let oneNumber = Number(one)
console.log(typeof oneNumber); // output : Number
console.log(oneNumber)


let bool = true; // Output 1
let boolNumber = Number(bool)
console.log(typeof boolNumber); // output : Number
console.log(boolNumber)

let str = "sonu"; // Output NaN
let strNumber = Number(str)
console.log(typeof strNumber); // output : Number
console.log(strNumber)


// "33" => 33
// "33abc" => NaN : Not a Number
// true =>1; false => 0

let isLoggedIn = 1 // output : True

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn);


// let strisLoggedIn = "" // output :False
let strisLoggedIn = "Sonu" // output :true

let strbooleanIsLoggedIn = Boolean(strisLoggedIn)
console.log(typeof strbooleanIsLoggedIn); //boolean
console.log(strbooleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false; "Sonu" =>True


let someNumber = 20;

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
