//.map() = is a method that accepts a callback function and returns a new array.
//        .map() accepts a callback by receiving a function as an argument. That function runs on each array element 
//          and its return values are collected into a new array.


// array= array.map(callback)
// declared number to be array of six elements 
let numbers = [1,2,4,5,6,7];
// define numberOf that add 5 each number 
// 'num' represnt all the elements in array  
 function  numberOF(num){
    return num + 5
};
// Use .map() to create new array with numberOF function
const double = numbers.map(numberOF);
 console.log(double);

// Using arrow function shorthand
// declaration of 'numbers' in to an array of six element 
 numbers = [1,2,4,5,6,7]
 //Use map to create new array
const superNumber = numbers.map(num =>num * 5);
 console.log(superNumber)