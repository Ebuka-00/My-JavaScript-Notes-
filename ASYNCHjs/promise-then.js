// Then  = is a methods used to handle the result of the resolved promise

function sayName() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("ebuka");
    }, 4000);
  });
}
function greeting() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      reject("goodmorning");
    }, 3000);
  });
}
function food() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("rice");
    }, 2000);
  });
}
//promise chain
sayName()
  .then((value) => {
    console.log("ebuka");
    return greeting();
  })
  .then((value) => {
    console.log("goodmorning");
    return food();
  })
  .then((value) => {
    console.log("rice");
    return console.log("cool");
  })
  .catch((error) => console.error(error));
