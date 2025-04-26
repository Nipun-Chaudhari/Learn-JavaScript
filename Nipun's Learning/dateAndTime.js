// Date in javascript are quite interesting

// declaration
myDate = new Date()
console.log(myDate)

// some interesting methods

console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())

// playing with myDate.toDateString

newDate = myDate.toLocaleString('default',{
    weekday: "long",
    // year: "long",
    // month: "long",
    // day: "long"
})

console.log(newDate)

// time in javascript starts from 1 jan 1970 and count in milliseconds

originalDate = new Date(2025, 0, 23)
console.log(originalDate)
console.log(originalDate.getTime())