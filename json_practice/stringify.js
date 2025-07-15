//JSON.stringify() convert js object or array into a jSON string

const names = ["Ebuka", "Prince", "kelvin"];
const jsonString = JSON.stringify(names);
console.log(jsonString); //output["Ebuka","Prince","Kelvin"]

const people = 
    {
  "name": "Ebuka",
  "isStudrnt": true,
  "age": 29, 
  "color" : "black"
}
 const jsonString2 = JSON.stringify(people)
 console.log(jsonString2)//output {"name":"Ebuka","isStudrnt":true,"age":29,"color":"black"}
