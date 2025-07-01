// A Callback = A callback is a function that passed as an argument to another function  
//               a function that  make a function to be an argument of another function
//                 and it's usually called later
// first example 
function Hello(callback){
    //console.log('Hello')
    callback()
}
function Goodluck(){
    //console.log('Goodluck')
}
//Hello(Goodluck)

// second example 
function Sum(callback, x ,y){
   let result = x + y
   callback(result)
}
function sumResult(result){
    console.log(result)
}
Sum(sumResult, 3 , 2)