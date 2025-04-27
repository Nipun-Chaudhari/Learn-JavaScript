let score = "45";
console.log(typeof(score))

scoreInNumber = Number(score)
console.log(typeof(scoreInNumber))

// number to string conversion

let num = 64;
console.log(`${typeof num}`)
let strNum = String(num)
console.log(`${typeof strNum}`)

// Operations

let neg = -num
console.log(`${neg} is of ${typeof neg} type`)

// some tricky operations

console.log(`1 + 2 = ${1 + 2}`)
console.log(`"1" + 2 = ${"1" + 2}`)
console.log(`1 + "2" = ${1 + "2"}`)
console.log(`"1" + 2 + 3 = ${"1" + 2 + 3}`)
console.log(`1 + 2 + "3" = ${1 + 2 + "3"}`)
console.log(`1 + "2" + 3 = ${1 + "2" + 3}`)

/* type conversion and operation between string and number follows the precedence from left to right
if first value is string operation will give string in result and vice versa */