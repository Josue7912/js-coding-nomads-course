/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Use forEach loops with the random number generator to create a two
 *    dimensional array of 50 rows containing 50 random numbers each.
 *
 *    [
 *     [2, 5, 32, 95, 12, 13, ... up to 50 numbers], // this is one row
 *     [ ... ],
 *     [ ... ],
 *     [ ... ],
 *     [ ... ],
 *     [ ... ],
 *     ... 50 rows
 *    ]
 *
 *
 * 6. Use forEach loops to iterate over every number, getting the sum, and
 *    average.
 */
console.log("\n1. Use a random number generator to generate an array of 100 values.\n");

let arr = [];
while(arr.length < 100){
    var i = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(i) === -1) arr.push(i);
}
console.log(arr);

console.log("\n2. Use forEach on the array to output the sum, count and average.\n");

let result = 0;

arr.forEach (number => {result += number})
console.log(result)

let count = 0
arr.forEach(number => (number === number && count++))
console.log(count)

let sum = 0
arr.forEach(number => {sum += number; avg = sum / arr.length})
console.log(avg)

console.log("\n3. Use forEach to create a new array from the first one that halves all the values.\n");

let divarr = []
arr.forEach(number =>{division = number/2; divarr.push(division)})
console.log(divarr)

console.log("\n4. Use forEach on the new array to output the sum, count and average again.\n");

let res = 0;

divarr.forEach (number => {res += number})
console.log(res)


let counter = 0
divarr.forEach(number => (number === number && count++))
console.log(counter)

let s = 0
divarr.forEach(number => {s += number; avg = s / arr.length})
console.log(avg)

console.log("\n5. Use forEach loops with the random number generator to create a two \
               dimensional array of 50 rows containing 50 random numbers each.\n");

let outArr = []
for (let j=0; j<50; j++){
    let arrFirst = [];
    while(arrFirst.length < 50){
        var i = Math.floor(Math.random() * 100) + 1;
        if(arrFirst.indexOf(i) === -1) arrFirst.push(i);
    }
    console.log(arrFirst);
    outArr.push(arrFirst);
}
console.log(outArr)

console.log("\n6. Use forEach loops to iterate over every number, getting the sum, and average.\n");

let total = 0;

outArr.forEach(function(row) {
    row.forEach(function(value) {
        total += value;
    })
});

console.log(total)


let final = 0
let caunt = 0

outArr.forEach(function(row) {
    caunt += row.length
    row.forEach(function(value) {
        final += value;
    })
});
averArr = final / caunt
console.log(averArr)

