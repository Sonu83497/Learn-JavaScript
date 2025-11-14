// Satck (primitive), Heap (non-primitive)

let myYoutubename = "Sonu";

let anotherYoutubename = myYoutubename;

anotherYoutubename = "sonuprajapati";

console.log(myYoutubename);
console.log(anotherYoutubename);

let userOne = {
    email: "sonu@gmail",
    upi: "sonu@ybl"
}

let userTwo = userOne;

userTwo.email = "sonu123@.com"

console.log(userOne.email);
console.log(userTwo.email);
