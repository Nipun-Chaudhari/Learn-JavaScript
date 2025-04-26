// string is an important datatype in javascirpt

// initialize the string

let str = "this is a string which says something gebbrish";
let my_name = new String("Nipun");

// string interpolation 

console.log(`str: "${str}" is declared by ${my_name}`);

// string methods
console.log(str.length);

// this methods includes string in HTML tags
console.log(str.italics())
console.log(str.blink())
// there are many methods like these but all of them are deprecated

// main methods that will be used in many cases
console.log(str.substring(3,10))
console.log(str.charAt(6))
console.log(str.indexOf('g')) // index of first occurance
console.log(str.slice(-9, -5))

// the Locale methods
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
/* these are just like toUpperCase and toLowerCase methods but
 "take into account the host environment's current locale" */

// rest of the methods can be explored once we start building on our own