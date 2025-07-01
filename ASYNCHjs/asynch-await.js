// Async/Await = Async = A keyword of that mark a function as asynchronous its will return a promise 
//               Await = A keyword used inside an async function that 
//                         waits for a promise to finish before moving to the next line 
//                          this function make async to work like sync 
function sayName() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {

            resolved('ebuka')
        }, 4000)
    })
}
function greeting() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            reject('goodmorning')
        }, 3000)
    })
}
function food() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved('rice')
        }, 2000)
    })
}

async function addEverything() {
    try {
        const sayNameResult = await sayName()
        console.log(sayNameResult)
        const greetingResult = await greeting()
        console.log(greetingResult)
        const foodResult = await food()
        console.log(foodResult)
        console.log('done')
    }
    catch (error) { console.error(error) }
}
addEverything()