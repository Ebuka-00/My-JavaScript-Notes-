fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => console.log(data.id))
  .catch((error) => {
    console.error(error);
  });
