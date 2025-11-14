const name = "sonu";
const repoCount = 15;

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName  = new String('sonu-prajapati');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,7);
console.log(newString);

const anotherString = gameName.slice(-12,4);
console.log(anotherString);


const newString1 = "   sonu prajapati   ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://sonu.com/sonu%10prajapati";
url.replace("%10", "-");
console.log(url.replace("%10", "-"));

url.includes("sonu");
console.log(url.includes("sonu"));

url.includes("arun");
console.log(url.includes("arun"));

gameName.split("-");
console.log(gameName.split("-"));