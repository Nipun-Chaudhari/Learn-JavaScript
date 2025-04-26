// ways to declare number type variable

let price = 100;
let profit = new Number(300.63534);

// number have very few methods

console.log(profit.toFixed(2)); // give fixed number of digits after decimal point
console.log(profit.toPrecision(5)); // starts from first digit and returns string
console.log(profit.toString())

// Math module in JavaScript

let ran = new Number(4563.546);
console.log(Math.floor(ran));
console.log(Math.ceil(ran));

// Random in math generates the values between 0-1

let r = Math.random()
console.log(r)

// To generate values in required range

start = 10;
end = 20;

let n = Math.random();
n = ((n * (end - start)) + 1) + start;
console.log(Math.floor(n));