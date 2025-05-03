// forof loop
// typically used on maps

let map = new Map()
map.set(1,'a')
map.set(2,'b')
map.set(3,'c')
map.set(4,'d')

console.log(map)

for (const element of map) {
    console.log(element)
}

// use array destructuring to get key and elements individually
for (const [key,element] of map) {
    console.log(`Element: ${element}, Key: ${key}`)
}

const numbers = [1,2,4,7,8]
for (const num of numbers) {
    console.log(num)
}

// for in loop
// mostly used where we are dealing with objects

let object = {
    name: "Nipun",
    age: 24,
    isAdult: true,
}

for (const key in object) {
    console.log(`Key: ${key}, Value: ${object[key]}`)
}


// foreach
// this is a higher order array function
// whenever array is created we get to use this function 
// this is in the prototype of array

let scores = [98,97,87,78,99]

scores.forEach((element, index) => {
    console.log(`Score of student${index+1} is ${element}`)
});

// foreach takes a callback function as an argrument
// callback function can be declared anywhere in code

function print(val) {
    console.log(val)
}

let values = [34,64,65742,32,634,24,2623]

values.forEach(print) // we only pass reference of callback function, it is not executed "print()""