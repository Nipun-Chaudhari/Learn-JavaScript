// Switch case in JS

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;

    default:
        console.log("default case")
        break;
}


// Null coalescing operator (??)
// This operator is used when you are not certian whether value returned will be null/undefined or not
// It acts as a safety check aganist null/undefined values

let notNull = null ?? 34
console.log(notNull)