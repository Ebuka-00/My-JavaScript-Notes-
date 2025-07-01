// setTimeout =  setTImeout() is a function that allow you  delay the execution of code by a 
//                specified number of millisecond 
//               1 second = 1000 milliseconds 

//              setTimeout(callback,delay)

function greetings() {
    console.log('hello');
};
setTimeout(greetings, 3000);

setTimeout(() => console.log('hello'), 3000);

// // setTimeout in a callback 

function sayName(Callback) {
    setTimeout(() => {
        console.log('ebuka');
        Callback()
    }, 3000);
}

function sayName2(Callback) {
    setTimeout(() => {
        console.log('daniel')
        Callback()
    }, 1000);
};

function sayName3(Callback) {
    setTimeout(() => {
        console.log('peace')
        Callback()
    }, 2000)
}
function sayName4() {
    setTimeout(() => {
        console.log('you have called all the names ')

    }, 4000)

}
sayName(() => {
    sayName2(() => {
        sayName3(() => {
            sayName4(() => {
                console.log('you have called all the names ');
            });

        });
    });
});