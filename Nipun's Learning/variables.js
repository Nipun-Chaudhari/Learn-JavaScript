let var1 = "Nipun";
const var2 = 23;
var var3 = 24.56;  // not to use, because it could not resolve the scope
var4 = true

console.log("Original values")

console.table({"var1": var1, "var2": var2, "var3": var3, "var4": var4})
// console.log(var1)
// console.log(var2)
// console.log(var3)
// console.log(var4)

var1 = "Chaudhari"
var3 = false;
var4 = 343.6

console.log("After change")

console.table({"var1": var1, "var2": var2, "var3": var3, "var4": var4})
// console.log(var1)
// console.log(var3)
// console.log(var4)

// this is not allowed because its constant
// var2 = 34
// console.log(var2)