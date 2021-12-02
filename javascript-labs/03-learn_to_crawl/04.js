/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let a = 3874;
let b = 2398;
let c = 54286;
let luckyNumber = 7

let sum = a + b + c
console.log("Sum of A+B+C is", sum)

let dif = c - a - b
console.log("Difference of C-A-B", dif)

let multip = a * b * c
console.log("Multiplicate A*B*C is", multip)

let largdiv = c / (a - b)
console.log("Largest number division of C /(A-B)", largdiv)

let modula = a % luckyNumber
console.log("A Modulo LuckyNumber is", modula)

let modulb = b % luckyNumber
console.log("B Modulo LuckyNumber is", modulb)

let modulc = c % luckyNumber
console.log("C Modulo LuckyNumber is", modulc)

//let result = 0
//console.log("Label", result)