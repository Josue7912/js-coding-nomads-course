/**
 * You may want to modify the html file to mute the output of certain exercises,
 * this one for instance, will generate many lines of output. You can comment
 * out lines in HTML with <!-- comment --> tags.
 *
 * 1. Create a for loop that will log all the numbers between 5 and 1000.
 *    incrementing in 5s. So the output would start "5, 10, 15, 20 ..."
 * 2. Create a for loop that outputs every number between 100 and -100 included.
 * 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
 *    9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
 *    times, what is the number you get at the end?
 *
 * This last one can be tricky! There are a couple ways to do it, see if you can
 * find both ways!
 *
 */

<!-- For loop of numbers between 5 and 1000 incrementing in 5 -->

for( let i = 5;
    i < 1001;
    i = i += 5){
    console.log(i);
    }

<!-- For loop of every number between 100 and -100 (included) -->

for( let j = -100;
    j <= 100 && j>= -100;
    j++){
    console.log(j)
    }

//for( let k = 3;
//    k < 1001;
//    k = k--3
//    ){
//    console.log(k)
//    }