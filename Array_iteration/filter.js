// The .filter() = A method creates a new array by filtering out elements from the original array
//                 It uses a callback function to decide which elements to keep.
// Using arrow function 
// declared number to be array of four elements
let numbers = [2, 4, 9, 5, 8, 10];
// filter the number that is less than 6 to create a new array with it 
const numberOf = numbers.filter(num => num < 6);
console.log(numberOf);// output [2,4,5]

// 2 Using named function 
//declaration of numbers in to arrays of 5 elements
numbers = [2, 8, 9, 10, 13,];
// define add to function  to  the select the number that is less than 10
function add(num) {
    return num < 10
};
// declaration  
const addNum = numbers.filter(add);
console.log(addNum);