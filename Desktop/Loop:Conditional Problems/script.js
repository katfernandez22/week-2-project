// A
// 1) Given the array,
// Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
// Loop through the array to find the longest word by how many letters each string contains.
// Which other variables will you be needing?
// 2) Print the length of the longest word to the console.
// 3) Print the longest word to the console.  
// 4) Now what if the array was 
// Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
// Since all the words are in one string together, how would you solve this? 


lunchArrayOne = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
console.log(lunchArrayOne);

let longestWord = lunchArrayOne.reduce((a, b) => (a.length >= b.length ? a : b));
console.log(longestWord);

let length = longestWord.length;
console.log(length);

lunchArrayTwo = ["Burger Salad Lasagna Sushi Meatloaf"];

let str = lunchArrayTwo.join();
console.log(str);

let str2 = str.split(` `);
console.log(str2);

let longestWordTwo = str2.reduce((a, b) => (a.length >= b.length ? a : b));
console.log(longestWordTwo);

let lengthTwo = longestWordTwo.length;
console.log(lengthTwo);


//B
//Write a function that returns elements on odd positions in a list.

function oddPositions(array) {
  let odd = (array.filter((num, i) => i % 2 == 1));

  let res = odd.join(" ");
  return res;
}

console.log(oddPositions([3, 6, 9, 12]));

// Function factorial(n) {
// }
// Compute the factorial of any given number.

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);


// Conditional Practice
// Write an if statement and determine a condition where:
// If mpg is less than or equal to 10, console “gas guzzler”
// If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
// If mpg is between 17-20, console “ it’s palpable”
// If mpg is between 21-29, console “ Atmosphere smiles at your decision”
// If mpg is between 30-35, console “ Not many gas stops will be taken”
// If mpg is above 35 console “ The fish of the sea smile at your conservation”
// If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
// After testing each one, change the mpg variable to ensure it is good. 

let mpg = "28";
if (mpg <= 10) {
  console.log("Gas guzzler");
} else if (mpg >= 11 && mpg <= 16) {
  console.log("Planet still frowns upon this, and so does your wallet");
} else if (mpg >= 17 && mpg <= 20) {
  console.log("It's palpable");
} else if (mpg >= 21 && mpg <= 29) {
  console.log("Atmosphere smiles at your decision");
} else if (mpg >= 30 && mpg <= 35) {
  console.log("Not many gas stops will be taken");
} else if (mpg >= 35 && mpg <= 119) {
  console.log("the fish of the sea smile at your conservation");
} else if (mpg == 120) {
  console.log("If youre using the Tom Ogle fuel system, props");
}