let value = 3
let negValue = -value
console.log(negValue);

//console.log(2+2);
//console.log(2**10); // 2 to the power 10

// Check ecma stript guildelines for conversion tool
// console.log("1" + 2); // ==> 12
// console.log(1 + "2"); // ==> 12
// console.log("1" + 2 + 2); //==> 122
// console.log(1+2+"2"); // ==> 32

// Comparing values

// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false

// console.log("2" > 1); // true

// console.log(null == undefined); // true
// console.log(null > undefined); // false
// console.log(null < undefined); // false


// console.log(null == 0); // false
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0);  //true 
/*
The reason is that an equility check == and comparions <>>=<= work differently 
Comparions convert the operands to numbers if they are not already.
i.e null is converted to 0 in all comparisons. 
Same goes for undefined.
*/

// === strict check , it will also check the data type as well

console.log("2" === 2); //false

