//Define a  function greeting1 that takes a callback named 'Hello'
function greeting1(Hello) {
    console.log('Good morning')// print Good morning 
    Hello()// invoke the next callback 
}
//Define a function greeting2 that take a callback named 'Hi'
function greeting2(Hi) {
    console.log('Good afternoon')// print Good afternoon
    Hi()// invoke the next callback
}
//Define a function greeting3 that take a callback named 'Sup'
function greeting3(Sup) {
    console.log('Good  evening')//prinits Good evening 
    Sup()//invoke the next callback 
}
//Define a fumction greeting4 that take a callback named 'Power'
function  greeting4(Power){
console.log('All greeting is good ')//prints 'All greeting is good'
Power()
}
// kick 
greeting1(() => {
    greeting2(() => {
        greeting3(() => {
            greeting4(()=> {
                console.log('All greeting is good')
            })

        })

    })
})
function greeting1(hello) {
    console.log('Good morning')
    hello()
}
function greeting2(Hi) {
    console.log('good afternoon')
    Hi()
}
function greeting3(sup) {
    console.log('good evening')
    sup()
}
function  greeting4(power){
console.log('All greeting is good ')
}
greeting1(() => {
    greeting2(() => {
        greeting3(() => {
            greeting4(()=> {
                console.log('All greeting is good')
            })

        })

    })
})
