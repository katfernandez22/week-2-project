
// 1. Create a function that takes numbers 1 - 10 and console logs them.Use a for loop.

function countToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

countToTen();

// 2. Using a while loop, return an array that contains all odd numbers between 3 and 103

function odds() {
  let oddArr = [];
  while (oddArr < 103) {
    for (let i = 3; i <= 103; i += 2) {
      oddArr.push(i);
    }
    return oddArr;
  }
}
odds();


// 3. arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  
// for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop. 


function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}
arraySum([1, 2, 3, 4, 5, 6]);


// 4. Use a loop to display the numbers 9 to 0 in descending order.

function descendingOrder() {
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
}
descendingOrder();


// 5. Write a function computing the factorial of n


function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);


// 6. Write a function using a for loop that returns the sum of all numbers from 1 to n. 

function sumOf(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
sumOf(9);


// 7. Using any loop, Given a string change the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ

function word(str) {
  let split = str.split("");
  let secondletter = 2;
  let replace = "Z";
  for (let i = secondletter - 1; i < split.length; i += secondletter) {
    split[i] = replace;
  }
  return split.join("");
}

word("donuts");