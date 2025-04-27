// Regarding arrow functions

// This is another syntax for declaring the functions in JS, this was introduced in 2015

const printMessage = (arg) => {
    return `Welcome, ${arg}`;
}

console.log(printMessage("Nipun"))

// we can return values without using return keyword, this is know as implicit return
const addTwo = (num1, num2) => (num1+num2)
console.log(addTwo(2,3))

// Now about 'this' keyword
// 'this' keyword is used to set context

const obj1 = {
    name: "Nipun",
    age: 24,

    greet: function() {
        return (`Hello, I am ${this.name}`)
    }
}

console.log(obj1.greet())