//JSON.Parse() = convert the Json strings in to js object
const jsonName = `["Ebuka","Prince","kelvin"]`;
const parseData = JSON.parse(jsonName);
console.log(parseData); //output [ 'Ebuka', 'Prince', 'kelvin' ]

const jsonPerson = `[{
    "name": "Ebuka",
  "isStudent": true,
  "age": 21, 
  "color" : "black"
},
 {
   "name": "john",
   "isStudent": false,
   "age" : 30,
   "color" : "white"
},
{
    "name" : "philp",
    "isStudent": true,
    "age" : 35,
    "color" : "white"
}]`
const parseData2 = JSON.parse(jsonPerson)
console.log(parseData2)// output [
//   { name: 'Ebuka', isStudent: true, age: 21, color: 'black' },
//   { name: 'john', isStudent: false, age: 30, color: 'white' },
//   { name: 'philp', isStudent: true, age: 35, color: 'white' }
// ]
