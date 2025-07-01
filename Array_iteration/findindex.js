// findindex = checks each items in an array and returns the index of the first match 
//              its return number(index)

//Using named function
const number = [2,4,5,4,5,6,7,7]

function findThree(num){
    return num === 6
}

const res = number.findIndex(findThree)
console.log(res)// output 5

//Using Arrow function
const result  = number.findIndex(num => (num === 6))
console.log(result)// output 5


