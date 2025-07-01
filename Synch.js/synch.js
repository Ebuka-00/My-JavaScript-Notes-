// synchronous code runs line by line, one step at a time 
// its wait for an operation to complete

console.log('1.start ')

function greet(){
    console.log('2. shouting')
}

greet()
console.log('3.stop ')

function greeting1(){
    console.log('hello')
}
function greeting2(){
console.log('hey')
}
function greeting3(){
    console.log('hi')
}
greeting1()
greeting2()
greeting3()