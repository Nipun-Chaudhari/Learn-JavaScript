// Primitive data types

// 7 types in JavaScript: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol("123")
const newid = Symbol("123")

console.log(id === newid); // false

//output for typeof 
// underfine ==> undefined
// number ==> number
// string ==> string
// boolean ==> boolean
// null ==> object
// Object(native and does not implement (call)) ==> object
// Object(native or host and implements (call)) ==> function
// Object(host and does not implement (call)) ==> Implementation-defined except may not be "undefined","boolean","number", or "string"


// Reference type (not primitive)

// Object, Array, Function  

const heros = ["Spiderman", "Batman", "Daredevil"];
let myself ={
    name: "Tejas",
    age: 24
}

const myfunction = function() {
    console.log("I am a function");
} 