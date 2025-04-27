// these are same as functions in other languages

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); 

function rest(...args) {
    console.log(args);
}

rest(1, 2, 3, 4, 5); // this is rest operator, it collects all the arguments passed to the function into an array


// functions can be stored in variables
let subract = function(a, b) {  
    return a - b;
}

console.log(subract(5, 3)); // if you declare a function using let, you cannot call it before the declaration, it will throw an error