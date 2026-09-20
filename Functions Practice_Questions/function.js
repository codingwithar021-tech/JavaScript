// Level 1 — Very Basic Functions


// 01. Write a function sayHello() that prints "Hello World".


// function sayHello() {
//     console.log("Hello, world!");
// }

// sayHello();



// ---------------------------------------------------------


//  02.  Write a function showName(name) that prints the given name.


// function showName(name) {
//     console.log(name);
// }

// showName("Abdur Rehman");



// -------------------------------------------------------------



// 03.  Write a function add(a, b) that returns the sum of two numbers.


// function add(a , b) {
//     console.log(a + b);
// }

// add(5 , 10);



// --------------------------------------------------------------



//   04.  Write a function subtract(a, b) that returns the difference between two numbers.


// function subtract(a , b) {
//     console.log(a - b);
// }

// subtract(12 , 5);



// ----------------------------------------------------------------



//   05.  Write a function multiply(a, b) that returns the multiplication of two numbers.


// function multiply(a , b) {
//     console.log(a * b);
// }

// multiply(3 , 5);



// ---------------------------------------------------------------------



//   06.  Write a function square(num) that returns the square of a number.


// function square(num) {
//     console.log(num * num);
// }

// square(5);



// --------------------------------------------------------------------------



//  07.  Write a function cube(num) that returns the cube of a number.


// function cube(num) {
//     console.log(num * num * num);
// }

// cube(5);



// ----------------------------------------------------------------------------



//   08.  Write a function getFullName(firstName, lastName) that returns the full name.


// function getFullName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }

// getFullName("Abdur", "Rehman");



// ------------------------------------------------------------------------------



//  Level 2 — Functions + Conditions


//  01.  Write a function isEven(num) that returns true if the number is even and false otherwise.


// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false



// ------------------------------------------------------------------------------



//  02.  Write a function isPositive(num) that checks whether a number is positive, negative, or zero.


// function isPositive(num) {

//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }

// }

// console.log(isPositive(5)); // Positive
// console.log(isPositive(-3)); // Negative
// console.log(isPositive(0)); // Zero




// -----------------------------------------------------------------------------------------


//  03.  Write a function findGreater(a, b) that returns the greater number.


// function findGreater(a, b) {
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     }
// }

// console.log(findGreater(10, 5)); // 10
// console.log(findGreater(3, 8)); // 8



// ----------------------------------------------------------------------------------------------



//  04.  Write a function canVote(age) that returns "Eligible" if age is 18 or above, otherwise "Not Eligible".


// function canVote(age) {
//     if (age >= 18) {
//         return "Eligible";
//     } else {
//         return "Not Eligible";
//     }

// }

// console.log(canVote(20)); // Eligible
// console.log(canVote(16)); // Not Eligible


// ------------------------------------------------------------------------------------------



//  05.  Write a function checkNumber(num) that returns "Even" or "Odd".


// function checkNumber(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }

// }

// console.log(checkNumber(4)); // Even
// console.log(checkNumber(7)); // Odd


// ----------------------------------------------------------------------------------------



//  06.  Write a function getGrade(marks) using these rules:

// - 90-100: A
// - 80-89: B
// - 70-79: C
// - 60-69: D
// - Below 60: F


// function getGrade(marks) {
//     if (marks >= 90 && marks <= 100) {
//         return "A";
//     } else if (marks >= 80 && marks <= 89) {
//         return "B";
//     } else if (marks >= 70 && marks <= 79) {
//         return "C";
//     } else if (marks >= 60 && marks <= 69) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// console.log(getGrade(95)); // A
// console.log(getGrade(82)); //B
// console.log(getGrade(75)); //C
// console.log(getGrade(68)); //D
// console.log(getGrade(50)); //F


// --------------------------------------------------------------------------------------------



//  07.  Write a function isDivisibleBy5(num) that returns true if the number is divisible by 5.


// function isDivisibleBy5(num) {
//     return num % 5 === 0;
// }

// console.log(isDivisibleBy5(10)); // true
// console.log(isDivisibleBy5(7)); // false


// --------------------------------------------------------------------------------------------




// Level 3 — Functions + Strings


//  01.  Write a function getLength(str) that returns the length of a string.


// function getLength(str) {
//     return str.length;
// }

// console.log(getLength("Hello, World!")); // 13
// console.log(getLength("JavaScript")); // 10



// --------------------------------------------------------------------------------------------



//  02.  Write a function toUpperCase(str) that returns the string in uppercase.


// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// console.log(toUpperCase("hello")); // "HELLO"
// console.log(toUpperCase("world")); // "WORLD"



// ----------------------------------------------------------------------------------------------



//  03.  Write a function getFirstCharacter(str) that returns the first character.


// function getFirstCharacter(str) {
//     return str.charAt(0);
// }

// console.log(getFirstCharacter("hello")); // "h"
// console.log(getFirstCharacter("world")); // "w"



// -------------------------------------------------------------------------------------------



//  04.  Write a function getLastCharacter(str) that returns the last character.


// function getLastCharacter(str) {
//     return str.charAt(str.length - 1);
// }


// console.log(getLastCharacter("hello")); // "o"
// console.log(getLastCharacter("javascript")); // "t"



// ----------------------------------------------------------------------------------------------



//  05.  Write a function isLongWord(word) that returns true if the word contains more than 5 characters.


// function isLongWord(word) {
//     return word.length > 5;
// }

// console.log(isLongWord("hello")); // false
// console.log(isLongWord("javascript")); // true



// ----------------------------------------------------------------------------------------------



// Level 4 — Small Problem Solving


//  01.  Write a function calculateDiscount(price, discount) that returns the final price after applying the discount percentage.


// function calculateDiscount(price, discount) {
//     const discountAmount = (price * discount) / 100;
//     const finalPrice = price - discountAmount;
//     return finalPrice;
// }

// console.log(calculateDiscount(1000, 20)); // 800
// console.log(calculateDiscount(50, 10)); // 45



// ---------------------------------------------------------------------------------------------



//  02.  Write a function calculateAge(birthYear, currentYear) that returns the person's age.


// function calculateAge(birthYear, currentYear) {
//     return currentYear - birthYear;
// }

// console.log(calculateAge(1990, 2024)); // 34
// console.log(calculateAge(2005, 2026)); // 21



// ----------------------------------------------------------------------------------------------



//  03.  2. Write a function `convertToMinutes(hours)` that converts hours into minutes.


// function convertToMinutes(hours) {
//     return hours * 60;
// }

// console.log(convertToMinutes(2)); // 120
// console.log(convertToMinutes(1.5)); // 90



// ---------------------------------------------------------------------------------------------



//  04.  Write a function getLargest(a, b, c) that returns the largest of three numbers.


// function getLargest(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(getLargest(10, 5, 8)); // 10
// console.log(getLargest(3, 12, 7)); // 12
// console.log(getLargest(4, 9, 15)); // 15



// -------------------------------------------------------------------------------------------



//  05.  Write a function calculator(a, b, operator).

// EXAMPLE : calculator(10, 5, "+"); // 15
//           calculator(10, 5, "-"); // 5
//           calculator(10, 5, "*"); // 50
//           calculator(10, 5, "/"); // 2



// function calculator(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "Invalid operator";
//     }
// }

// console.log(calculator(10, 5, "+")); // 15
// console.log(calculator(10, 5, "-")); // 5
// console.log(calculator(10, 5, "*")); // 50
// console.log(calculator(10, 5, "/")); // 2
// console.log(calculator(10, 5, "%")); // Invalid operator



// ----------------------------------------------------------------------------------------------



//   Bonus Challenges


//  01.  Create countVowels(str) that returns the number of vowels.


// function countVowels(str) {
//     const vowels = "aeiou";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("JavaScrIpt Function")); // 6



// -----------------------------------------------------------------------------------------------



//  02.  Create factorial(num).  
//       factorial(5);
//       120


// function factorial(num) {

//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // 120



// -------------------------------------------------------------------------------------------------



//   03.  Create countCharacters(str) without using .length.

// function countCharacters(str) {
//     let count = 0;
//     for (let char of str) {
//         count++;
//     }
//     return count;
// }

// console.log(countCharacters("Hello")); // 5
// console.log(countCharacters("JavaScript")); // 10



// -----------------------------------------------------------------------------------------------



//  04.  Create reverseString(str) that returns the reversed string.


// function reverseString(str) {
//     let reversed = "";


//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("JavaScript")); // "tpircSavaJ"



// -------------------------------------------------------------------------------------------------



//  05.  Create isPalindrome(word) that checks whether a word reads the same backward.


// function isPalindrome(word) {
//      let palindrome = "";

//     for (let i = word.length - 1; i >= 0; i--) {
//         palindrome += word[i].toLowerCase();
//     }
//     return word.toLowerCase() === palindrome;
// }

// console.log(isPalindrome("Madam")); // true
// console.log(isPalindrome("hello")); // false



// ----------------------------------------------------------------------------------------------


