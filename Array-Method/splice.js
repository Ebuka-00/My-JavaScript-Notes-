//.splice = A method that add or removes elements from the original array 
const color2 =['yellow','purple','gray','black']
color2.splice(3)
console.log(color2)
//[ 'yellow', 'purple', 'gray' ]
color2.splice(0,1,'brown')
//output ['brown','purple','gray','black']
console.log(color2)