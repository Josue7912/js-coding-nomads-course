/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

function KtoC(tempInK){
    let tempInC = (tempInK) - 273.15;
    return tempInC;
}

function CtoK(tempInC){
    let tempInK = (tempInC) + 273.15;
    return tempInK;
}

function FtoK(tempInF){
    let tempInK = (tempInF - 32)* 5/9 + 273.15;
    return tempInK;
}

function KtoF(tempInK){
    let tempInF = (tempInK - 273.15) * 9/5 + 32;
    return tempInF;
}

function pythagoras(b, c){
    let hypotenuse = b ** 2 + c ** 2;
    return hypotenuse;
}

function inchToCm(inches){
    let cm = inches * 0.39370;
    return cm;
}

function CmToInch(cm){
    let inch = cm / 0.39370;
    return inch;
}

function MToKm(miles){
    let kilometers = miles / 0.62137;
    return kilometers;
}

function KmToM(kilometers){
    let miles = kilometers * 0.62137;
    return miles;
}

// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));