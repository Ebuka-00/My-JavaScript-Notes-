//this = reference to the object 
 //this is a keyword that refers to the object it belong to 
const person = {
    name: 'Chi',
    age: 50,
    complextion: 'Dark',
    // in the function the this. refer to  the object person. 
    composition(){
        console.log(`my name ${this.name} i'm ${this.age} year old `)
    }
    // Arrow function does work in a .This keyword 
}
person.composition() 
// .this is just a reference to an object 