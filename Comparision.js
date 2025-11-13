console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* the resion is that an equality check == and comparisons > < >= <= work differently.
   Comparisons convert null to a number. treating it as 0.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// strict check ===
console.log("2" == 2);
console.log("2" === 2);




