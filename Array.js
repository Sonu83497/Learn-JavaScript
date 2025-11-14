const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);
console.log(typeof (myArr));


const heros = ["saktimaan", "naagraj", "doga"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6)

console.log(myArr.length);
console.log(myArr[1]);

//Array methods

myArr.push(6)
console.log(myArr);

myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(4));

console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof (newArr));



splice, slice

console.log("A", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C",myArr)



