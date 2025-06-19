
function  add(callback,a ,b){
    let result1 = a + b
console.log(`the total${result1}`)
    callback()
}
function multiple(hello , r, t){
    let result2 = r * t
    console.log(`the total ${result2}`)
    hello(result2)
}
function substractI(hi , e , o){
    let result3 = e - o
    console.log(`the total${result3}`)
    hi( result3)
}
function division(power, f ,g ){
    let result4 = f / g
    console.log(`the total ${result4}`)
    power(result4)
}

add(2,4 )