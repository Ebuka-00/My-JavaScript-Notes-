async function fetechData() {
    try {
        const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        if (!reponse.ok) {
            throw new Error('the data is not find ')
        }
        const data = await reponse.json()
         console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
fetechData()