// MAP and FILTER Exercises


//  01. Double the Numbers ; Expected: [2, 4, 6, 8, 10]


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);



// ------------------------------------------------------------------------------------------



//  02. Add 10 to each number ;  Expected: [15, 20, 25, 30]


// const numbers = [5, 10, 15, 20];
// const addedNumbers = numbers.map(num => num + 10);
// console.log(addedNumbers);



// ------------------------------------------------------------------------------------------



//  03. Convert names to uppercase  ;  Expected: ["ALI", "SARA", "AHMED"]


// const names = ["ali", "sara", "ahmed"];
// const upperCaseNames = names.map(name => name.toUpperCase());
// console.log(upperCaseNames);



// -----------------------------------------------------------------------------------------



// ====================  filter() =====================


//  01.  Get even numbers ; Expected: [2, 4, 6]


// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);



// --------------------------------------------------------------------------------------------


//  02.  Get numbers greater than 10 ; Expected: [12, 20, 15]


// const numbers = [5, 12, 8, 20, 3, 15];
// let greaterNumber = numbers.filter(num => num > 10);
// console.log(greaterNumber);



// ----------------------------------------------------------------------------------------------


//  03.  Get names longer than 4 characters ; Expected: ["Ahmed", "Usman"] 


// const names = ["Ali", "Ahmed", "Sara", "Usman", "John"];
// let longNames = names.filter(name => name.length > 4);
// console.log(longNames);


// ---------------------------------------------------------------------------------------------


// ⭐ Use both : 

//  01. First filter numbers greater than 5, then map them to double ; Expected: [12, 16, 20]


// const numbers = [2, 6, 8, 3, 10];
// let filterNumber = numbers.filter(num => num > 5);
// console.log(filterNumber);

// let doubleNumber = filterNumber.map(value => value * 2);
// console.log(doubleNumber);



// short code 

// const numbers = [2, 6, 8, 3, 10];
// let updateNumber = numbers.filter(num => num > 5).map(value => value * 2)
// console.log(updateNumber);



// ---------------------------------------------------------------------------------------------------


