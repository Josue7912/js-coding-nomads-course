function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */
 console.log("======While loop of numbers between 5 and 1000 incrementing in 5======")

j = 0;
while (j < 1000){
    j = j + 5;
    console.log(j);
}

console.log("=====While loop of every number between 100 and -100 (included)======")

k = -101;
while (k < 100 && k > -102){
    k++;
    console.log(k);
}

console.log("=====While loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6, 9, 8 ...======")

sequenceNumber = 0
k = 0
while (k < 5000){
    k++;
    sequenceNumber += 3
    console.log(sequenceNumber)
    sequenceNumber -=1
    console.log(sequenceNumber)
}


console.log("=====Get random number divisible by 11======")

i = getRandomNumber()
while ((i % 11) !== 0){
   i = getRandomNumber()
   if ((i % 11 === 0)){
       console.log(i)
   }
}
