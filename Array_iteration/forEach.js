//The forEach() = A method is used to loop through each element in
//            an array and run a specific function (called a callback) on each one.
//            the three important thing array.forEach(callbackfunction)

// 1 Using a named function 
//  Declare an array named 'fruits' containing four element 
let fruits = ['apple','orange','pineapple','coconut'];
//Define a function named 'eatFruit'that take one argument name 'fruit'
function eatFruits(fruit){
    // Inside the function, add 'i want to eat an ' to fruits
   console.log(`i want to eat an ${fruit}`)
 };
 //// Use the forEach() method to run the 'eatFruits' function on each element in the 'fruits' array 
 fruits.forEach(eatFruits);// callback function 


// Using an arrow function
//  Declare an array named 'fruits' containing four element 
 fruits = ['apple','orange','pineapple','coconut'];
 // Loop through each fruit in the fruits array 
fruits.forEach( fruit => console.log(`i want to eat an ${fruit}.`));
// fruit represent all element in array 

