// a class is a more structure and cleaner to work a constructor object in js 
class person {
    constructor(name , age) {
        this.name = name
      this.age = age
    }
    myName(){
        console.log(`i love ${this.name} and his ${this.age} year old`)
    }
}
const personage = new person('ebus', 21)
personage.myName()