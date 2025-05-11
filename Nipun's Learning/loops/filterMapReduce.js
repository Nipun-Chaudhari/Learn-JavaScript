// filter
// as name suggest, this is used to filter, applicable on arrays

const myArray = [1,2,3,4,5,6,7,8,9,10]

const filteredArray = myArray.filter( (num) => {
    return num > 4; /// this is the filter condition
} )

console.log(filteredArray);

// map
// used to perform same operation or different operations on all elements of array

const mappedArray = myArray.map( (num) => {
    return num+2; // operation to be performed
} )

console.log(mappedArray);

// reduce
// this is an interesting one, used to reduce entire array into a single value
// for example adding up all the array elements

const reducedArray = myArray.reduce( (acc, curr) => {
    return acc + curr;
}, 0) /* this is the initial value of accumulator, it is only used for the first iteration
from the second iteration, accumulator uses the value returned in previous iteration */

console.log(reducedArray)