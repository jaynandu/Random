let str1 = "Junior";
let str2 = "Kat";

console.log(`My name is ${str1} ${str2} `);
//!MATH

let num1 = 100;

//Basic Math
console.log("********Basic Math********");
console.log(num1 + 25);
console.log(num1 - 100);
console.log(num1 * 100);
console.log(num1 / 1500);

console.log("********Additional Mathematical Operations********");
//Additional Mathematical Operations
console.log(num1 % 1500); // Remainder
console.log(++num1); //Increment
console.log(--num1); //Decrement

console.log("********Using the Math Object********");
//Using the Math Object
console.log(Math.PI); //Pi
console.log(Math.sqrt(num1)); //Square root

let num1 = "150";
let flo1 = "1.50";

console.log("********Converting strings to integers********");
//Converting strings to integers
console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt("ABC"));
console.log(parseInt("0xF")); //Hexadecimal number

console.log("********Converting strings to float********");
//Converting strings to float
console.log(parseFloat("1.00"));
console.log(parseFloat(flo1));
console.log(parseFloat("ABC"));

console.log("********More Conversion Examples********");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt("1.5"));
console.log(parseInt("1 + 1"));

//Using Template Literals
console.log(parseInt(`${1 + 1}`));

console.log("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());

//DATES

const now = new Date();
const win95Launch = new Date(1995, 7, 24);

console.log(now);
console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);
