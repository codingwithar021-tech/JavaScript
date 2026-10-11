const products = [
  { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
  { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
  { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
  { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
  { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
  { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];


// Part 1: Sort Questions


// 1. Sort Products by price (low to high).


let lowToHighPrice = products.sort((a, b) => a.price - b.price);
console.log("Products sorted by price (low to high):", lowToHighPrice);


// ----------------------------------------------------------------------------


// 2. Sort Products by price (high to low).


// let HighToLowPrice = products.sort((a, b) => b.price - a.price);
// console.log("Products sorted by price (high to low):", HighToLowPrice);


// ---------------------------------------------------------------------------


// 3. Sort Products by name (A to Z).


// let nameAtoZ = products.sort((a , b) => {
//     if(a.name < b.name) {
//         return -1;
//     }
//     else if(a.name > b.name) {
//         return 1;
//     }
// }
// );
// console.log("Products sorted by name (A to Z):", nameAtoZ);


// ------------------------------------------------------------------------------


// 4. Sort products by rating (highest first).


// let highestRating = products.sort((a , b) => b.rating - a.rating);
// console.log('products by rating (highest first) :' ,highestRating);


// ---------------------------------------------------------------------------------


// 5. Sort products by quantity (lowest to highest).


// let lowToHighestQuantity = products.sort((a , b) => a.quantity - b.quantity);
// console.log('products by quantity (lowest to highest) :' , lowToHighestQuantity);


// ------------------------------------------------------------------------------------


// 6. Find the 3 most expensive products using sort() and slice().


// let topExpensiveProduct = products.sort((a , b) => b.price - a.price).slice(0,3);
// console.log("most expensive products :" ,topExpensiveProduct);


// ---------------------------------------------------------------------------------------


// 7. Find the 2 cheapest products using sort() and slice().


// let cheapestProduct = products.sort((a , b) => a.price - b.price).slice(0,2);
// console.log("2 cheapest products" ,cheapestProduct);


// -------------------------------------------------------------------------------------


// 8. Filter products priced below Rs. 10,000, then sort by price (low to high).


// let filterProducts = products.filter((product) => product.price < 10000);
// // console.log(filterProducts);

// let filterPrice = filterProducts.sort((a , b) => a.price - b.price);
// console.log("products priced below Rs. 10,000" ,filterPrice);


// ---------------------------------------------------------------------------------------


// 9. Find the top 3 highest-rated products using sort() and slice().


// let highestRatedProducts = products.sort((a , b) =>  b.rating - a.rating).slice(0,3);
// console.log("top 3 highest-rated products" , highestRatedProducts);


// --------------------------------------------------------------------------------------------


// 10. Sort products by rating (highest first). If ratings are equal, sort by price (low to high).


// let sortingEqualRatings = products.sort((a , b) => {
   
// if (b.rating !== a.rating) {
//   return b.rating - a.rating;
// } else {
//   return a.price - b.price;
// }
// })

// console.log(sortingEqualRatings);


// -----------------------------------------------------------------------------------------------------






// Part 2: Reduce Questions


// 1. Calculate the total price of all products.


// let totalPrice = products.reduce((total , curr) => total + curr.price, 0);
// console.log("total price of all products =" , totalPrice);


// -------------------------------------------------------------------------------------------


// 2. Calculate the total quantity of all products.


// let totalQuantity = products.reduce((total , curr) => total + curr.quantity, 0);
// console.log('total quantity of all products =' , totalQuantity);


// ----------------------------------------------------------------------------------------------


// 3. Calculate the average price of all products.


// let productsPrice = products.reduce((total , curr) => total + curr.price, 0);
// let averagePrice = productsPrice / products.length;
// console.log("average price of all products =" , averagePrice);


// ----------------------------------------------------------------------------------------------


// 4. Find the most expensive product using reduce().

//  acc = ab tak ka sbse expensive product
//  curr = check hony wala product

// let expensiveProduct = products.reduce((acc , curr) => {
//   if(acc.price > curr.price){
//     return acc;
//   } else {
//     return curr;
//   }
// });

// console.log(expensiveProduct);


// ---------------------------------------------------------------------------------------------


// 5. Find the cheapest product using reduce().

// let cheapestProduct = products.reduce((acc , curr) => {
//   return acc.price < curr.price ? acc : curr ;
// });

// console.log(cheapestProduct);


// --------------------------------------------------------------------------------------


// 6. Find the highest-rated product using reduce().


// let highestRatedProduct = products.reduce((acc , curr) => {
//   return acc.rating > curr.rating ? acc : curr ;
// });

// console.log(highestRatedProduct);


// ------------------------------------------------------------------------------------


// 7. Count how many products have a price greater than Rs. 5,000.


// let PriceAbove5000 = products.reduce((acc , curr) => {
//   if(curr.price > 5000)  {
//    acc.push(curr) 
//   }
//   return acc;
// }, []);

// console.log(PriceAbove5000);


// --------------------------------------------------------------------------------------


// 8. Calculate the total inventory value using price * quantity.


// let totalvalue = products.reduce((acc , curr) => {
//   return acc + (curr.price * curr.quantity)
// }, 0);

// console.log('Total inventory value =' , totalvalue);


// ---------------------------------------------------------------------------------------


// 9. Calculate the total quantity of products with a rating above 4.3.


// let totalQuantity = products.reduce((acc , curr) => {
//   if(curr.rating > 4.3){
//     return acc + curr.quantity
//   } else{
//     return acc
//   }
// }, 0)

// console.log('Total quantity of products with rating above 4.3 =' , totalQuantity);


// ----------------------------------------------------------------------------------------------


// 10.  Use one reduce() to create an object containing:
//     - Total number of products
//     - Total quantity
//     - Total inventory value



// let inventorySummary = products.reduce((acc , curr) => {
//  acc.totalProducts += 1
//  acc.totalQuantity += curr.quantity
//  acc.totalInventoryValue += curr.price * curr.quantity

//  return acc; 
// },
// {
//   totalProducts : 0,
//   totalQuantity : 0,
//   totalInventoryValue : 0,
// });

// console.log('Total number of products =', inventorySummary.totalInventoryValue);
// console.log('Total Quantity =', inventorySummary. totalQuantity);
// console.log('Total inventory value =' , inventorySummary.totalInventoryValue );



// ---------------------------------------------------------------------------------------------------