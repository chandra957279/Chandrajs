// Dates

let myDate = new Date();
console.log(myDate.toString()); // Current date and time`
console.log(myDate.toDateString()); //Fri Jun 06 2025
console.log(myDate.toLocaleString());// 6/6/2025, 8:19:43 AM

let myCreatedDate = new Date(2025, 5, 6, 8, 19, 43);
console.log(myCreatedDate.toLocaleString()); // Fri Jun 06 2025 08:19:43 GMT+0200 (Central European Summer Time)

let myTimeSteamp = Date.now();
// console.log(myTimeSteamp); // 1717653583000
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());


newDate.toLocaleString('default'),{
    weekday: 'long',
}


