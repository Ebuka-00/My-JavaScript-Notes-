// Define a function named 'greeting' that takes a function 'callback' as an argument
function greeting(callback) {
    // Log "good morning" to the console
    console.log('good morning');
    // Call the passed-in callback function
    callback();
}

// Define another function named 'greeting2'
function greeting2() {
    // Log "Good afternoon" to the console
    console.log('Good afternoon');
}

// Call the 'greeting' function and pass 'greeting2' as the callback function

function substract(callback, a, b){
    let result = a - b
    callback(result)
}
greeting(greeting2); 

function substractNum(result){
    console.log(result)
}
substract(substractNum,2 , 4)