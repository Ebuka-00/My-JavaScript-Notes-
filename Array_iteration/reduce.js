// .reduce = is method which reduce the elements of an array to a single value 

// Using named function 

const nums = [2,3,4]// Array of a numbers

// Use reduce directly with an Arrow function to get product  
 let Num = nums.reduce((num ,value) => num * value)

console.log(nums)// output 24


// Define a function that Multiple two numbers
function multiple(num, value) {
    return num * value
}
 //Use reduce directly with an arrow function to 
// get the product 
const product = nums.reduce(multiple)

console.log(product)// output 24


