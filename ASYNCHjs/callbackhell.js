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
function greeting4(hey){
    console.log('All greeting is good ')//prints 'All greeting is good'
    hey()
}
// callback hell begin here 
greeting1(() => {
    greeting2(() => {
        greeting3(() => {
            greeting4(() => {
                console.log('All greeting is good')
            })

        })

    })
})
