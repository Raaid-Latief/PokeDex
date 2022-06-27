const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
const pokemonList = [];


// async keyword used to allow await functionality
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
const urlList = data.results;
    console.log(data)

    urlList.forEach(async (pokemonUrl) => {
        const res = await fetch(pokemonUrl.url);
        const pokemon = await res.json();
        pokemonList.push(pokemon);
        showPokemon(pokemonList);
   
    });
}

 getData();

 function showPokemon(pokemonArray) {
     document.querySelector("#pokemonList").innerHTML = "";
     pokemonArray.forEach((pokemon) => {
        document.querySelector("#pokemonList").innerHTML += `
       <img src=${pokemon.sprites.front_default} alt="Front">
        `;
     });
 }
// Loop over list and make individual fetch calls

