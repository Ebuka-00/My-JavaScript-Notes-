// fetch =       The fetch() function in JavaScript is used to make
//              HTTP requests (like getting data from a server).
//              It returns a Promise, making it a powerful tool for working
//              with APIs or loading resources asynchronously.
//              fetch (url,{option})
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//      .then(response =>console.log(response))
//      .catch(error => {console.log(error)})

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
     .then(response => {
          if (response.ok) {
               throw new Error
          }
          return response.json()
     })
     .then(data => console.log(data))
     .catch(error =>{console.error(error)})