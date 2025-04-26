// contents of both videos are merged into one file

// how to initialize

let array1 = [1,32,4,6]; // this is general
let array2 = new Array(1,3,5,7,8,2) // i like this

// every language should have this
console.log(array1.length) // this is property of array don't put ()

// spread arrays not rumours
let array3 = ["nipun", "chaudhari"]
let array4 = ["is", "an", "engineer"]
let array5 = [...array3, ...array4]
console.log(array5)

// joining the elements
let str1 = array5.join(" ") // you can provide you own glue(thing in the parentheses), by default uses (,)
console.log(str1)

// some other use things

console.log(array1.at(0))
console.log(array2.find((val) => val > 5)) // this takes other kind of args

// the slice and splice
console.log(array2.slice(1,5))
console.log(`the original array is ${array2}`)
console.log(array2.splice(1,5)) // this is dangerous, it cuts original array short
console.log(`the original array is ${array2}`)

// push and shift, one adds from tail and other from head
let array6 = [2,3,5,6,8,9]
array6.push(10)
console.log(array6)
array6.shift(1) // not great for large arrays, shift all the element by 1
console.log(array6)

// pop and unshift, these are opposite of push and shift
array6.pop()
console.log(array6)
array6.unshift()
console.log(array6)