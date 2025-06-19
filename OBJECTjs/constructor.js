// A constructor is a special method used to create and set up objects. OR 
//is a special method for defining the properties and method of object
// there are two essential .This and new (.this refers to the 'new' object being created)
function Person(name, color, age, email) {
    this.name = 'name',
        this.age = age,
        this.color = color,
        //Assigns the parameter 'color' to the 'color' property of the new object
        this.email = email
}
// this new a declaration with the new keyword
const personID = new Person ('ebuka', 'dark', 90, 'ebuka@gmail.com')
// in the declaration new must content the object name 
console.log(personID)
// the new varible will be console.log in eg console.log(personID)
function Book(title, author, yearPublished) {
    this.title = title,
        this.author = author,
        this.yearPublished = yearPublished,
// declaration of a function
     this.getSummary = function(){
       return `${this.title} by ${this.author} published in ${this.yearPublished}`
        }
    }
    

    
const Book1 = new Book('The Alchemist', 'Paulo Coelho', 1988 )

console.log(Book1.getSummary())

