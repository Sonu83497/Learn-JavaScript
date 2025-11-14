// Dates

let myDate = new Date();
console.log(myDate); //2025-11-14T13:32:01.593Z

console.log(myDate.toString()); //Fri Nov 14 2025 19:02:53 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()); //11/14/2025, 7:02:53 PM

console.log(myDate.valueOf()); //1763127396831

console.log(myDate.toDateString()); //Fri Nov 14 2025

console.log(myDate.getMilliseconds()); //611

console.log(typeof myDate);


let myCreatedDate = new Date("2025-11-20");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myCreatedDate1 = new Date(2025,0,20);
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate1.toLocaleString());


let myCreatedDate2 = new Date("2022-01-25");
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3 = new Date("2022-01-25 20:20:20");
console.log(myCreatedDate3.toDateString());
console.log(myCreatedDate3.toLocaleString());


let myCreatedDate4 = new Date("02-08-2004");
console.log(myCreatedDate4.toDateString());
console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

let cover = newDate.toLocaleString("default", {
    weekday:"long",
    timeZone:"Asia/Kolkata"
})

console.log(cover);
