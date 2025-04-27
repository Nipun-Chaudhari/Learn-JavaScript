// IIFE stands for Immediately Invoked Function Expressions

// these are just the functions, but invoked right after declaration

/*
    ()()
    | |
    | |
    | we are calling this function immediately after declaration
    |
    this is the function
*/

(function connect(){
    console.log("Connection successful")
})();

// it is good habit to terminate IIFE by ';', it helps you set it's context and write more IIFEs after that
// this also works for arrow functions

( () => {
    console.log("Connection terminated")
} )();

// if you want to pass agrs, pass it in function call

( (db) => {
    console.log(`${db} connection timeout`)
} )("postgres");

