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

j = 0;
while (j < 1000){
    j = j + 5;
    console.log(j);
}


k = -101;
while (k < 100 && k > -102){
    k++;
    console.log(k);
}



i = getRandomNumber()

//while ((i % 11) !== 0){
//   console.log(i)
//   }
