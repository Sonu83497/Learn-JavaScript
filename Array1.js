const marval_heros = ["ironman", "thor", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marval_heros.push(dc_heros);

// console.log(marval_heros);
// console.log(marval_heros [3] [1])

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marval_heros,...dc_heros];
// console.log(allNewHeros);


const anotherArr =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr);


console.log(Array.isArray("sonu"));
console.log(Array.from("sonu"));
console.log(Array.from({name : "sonu"}));//interesting



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
