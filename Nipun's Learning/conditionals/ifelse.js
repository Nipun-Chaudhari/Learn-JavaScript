// Conditionals in JS works almost like any other programming language

const val = 10

if (val <= 20){
    console.log("less than 20")
} else{
    console.log("greater than 20");
}

const isAdult = true
const nationality = "indian"

if (isAdult && nationality == "indian") {
    console.log("create indian voter ID")
} else {
    console.log("you are not eligible")
}


if (true && false){
    console.log("this is true")
} else if ("string" || false) {
    console.log("this is always executed")
}

// ternery operator
// syntax: condition ? executed when true : executed when false

let price = 320
price <= 400 ? console.log("affordable") : console.log("not affordable")

// truthy and falsy values
// falsy : false, 0, null, undefined, ""(empty string), BigInt(0n), -0
// truthy : true, " "(any non empty string), function(){}, [](empty array), {}(empty object)