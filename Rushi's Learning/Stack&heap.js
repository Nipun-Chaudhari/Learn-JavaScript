// Stack (primitive) , Heap (non-primitive)


// stack
let friend_1 = "raj"

let schoolfriend_1 = friend_1

schoolfriend_1 = "tushar"

console.log(friend_1);
console.log(schoolfriend_1);

// In stack the copy of the reference variable is made, not the actual object.

// Heap

let userone = {
    name: "tejas",
    age: 24
}

console.log(userone.name);

let usertwo = userone

usertwo.name = "rajesh"

console.log(userone.name);

// In heap it points to the same object.