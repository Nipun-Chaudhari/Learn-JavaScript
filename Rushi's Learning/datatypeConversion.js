
// Datatype Conversion

let score = "33"

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let teamA = "33bc"

console.log(typeof teamA);

let scoreOfA = Number(teamA) // will convert string to number
console.log(typeof scoreOfA);
console.log(scoreOfA); // if the string has alphabets or symbol it show result as NaN that is "not a Number"

 let BteamScore = null
// if the value is null then it convert into "0"
 console.log(typeof BteamScore);

 let Bscore = Number(BteamScore)
 console.log(Bscore);

 let CteamScore = undefined
// if the value of undefined it show NaN
 console.log(typeof CteamScore);

 let cScore = Number(CteamScore)
 console.log(cScore);

 /* 
 "33" ==> 33
 "33bc" ==> NaN/"Not a number"
 true ==> 1 ; false ==> 0
 null ==> 0
 */

 // To convert to boolean

 let loggedin = undefined

 let booleanvalue = Boolean(loggedin)
 console.log(booleanvalue);

 // if the string is not empty it will show as "true"
 // other wise it will show as "false"

 // To convert to string 

 let runs = 49

 let target = String(runs)
 console.log(target);
 console.log(typeof target);

 