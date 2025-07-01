// PROMISE = A promise is a guarantee that something will done 
//          in the future either successfully (resolve ) 0r is unsuccessful(reject) in the future
//           PENDING =(RESOLVE , REJECT)
//     new promise (resolved , reject) => {asynch code }

function sayName(name){
    return new Promise((resolved , reject)=> {
        setTimeout(()=>{
        const correctName = true 
        if(correctName){
            resolved('ebuka')
        } else {
            reject('is not correct')
        }
    }, 3000)
})
}

function greeting(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
const correctGreating = true 
if(correctGreating){
    resolved('goodmorning')
}else {
    reject('is not correct greeting')
}
        },4000)
    })
}

function food(){

    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            const correctFood = true
            if(correctFood){
                resolved('rice')
            } else {
                reject('thats is not a food ')
            }
        },5000);
    })
}
sayName().then(value =>{console.log(value); return greeting()})
         .then(value => {console.log(value);return food() })
         .then(value =>{console.log(value);console.log('done')})
         .catch(error =>console.error(error))
