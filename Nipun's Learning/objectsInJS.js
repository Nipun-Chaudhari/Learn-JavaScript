// this is regarding objects

// there are two types: singleton and non-singleton

// singleton
// let obj = Object.create()

// we are focusing on non-singleton

let obj1 = {
    name: "Nipun",
    age: 24,
    skills: ["Python", "JavaScript"]
}

// accessing properties of objects

console.log(obj1.name)
console.log(obj1["age"])

// adding symbol as a key in object, interviewer asks this

let sym = Symbol("work@")
obj1[sym] = "Capgemini"
console.log(obj1)

// adding function as property

obj1.intro = function(){
    console.log(`Hello, my name is ${this.name} and I work at ${this[sym]}`)
}
console.log(obj1)
console.log(obj1.intro()) // don't forget (), needed for execution

// spreading, works similar as in arrays
let obj2 = {
    salary: 26000,
    address: "Flat 201, Shivshakti apartment"
}

// let obj3 = Object.assign({}, obj1, obj2) ---> this is somewhat complex
// easier way is
let obj3 = {...obj1, ...obj2}
console.log(obj3)

// lets try something different
let obj4 = {...obj1}
console.log(obj4 === obj1) // this creates new object

// let's prove
console.log(obj1.name)
console.log(obj4.name)
obj4.name = "Rohan"
console.log(obj1.name)
console.log(obj4.name)

// destructuring the object

const {name: myname} = obj1
console.log(myname)