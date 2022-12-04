import './App.css';
import React , { useState, useEffect } from "react";
import Card from './components/card'

function App() {

  const [pokedata , setPokeData] = useState([]);  

  useEffect(() => {
    getPokemons();
  }, []);


 const getPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=102`;

    fetch(url).then(res=>res.json())
        .then(response=>{
          console.log(response);
          setPokeData(response.results);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
 };


//  const createPokemonCard = (pokemon) => {
//     const pokemonEl = document.createElement('div');
//     pokemonEl.classList.add('pokemon');
 
//     const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
//     const id = pokemon.id.toString().padStart(3, '0');
 
//     const poke_types = pokemon.types.map((type) => type.type.name);
//     const type = pokemon_types.find((type) => poke_types.indexOf(type) > -1);
//     const color = pokemon_types[type];
 
//     pokemonEl.style.backgroundColor = color;
 
//     const pokemonInnerHTML = `
//      <div class="img-container">
//          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"" alt="${name}">
//      </div>
//      <div class="info">
//          <span class="number">#${id}</span>
//          <h3 class="name">${name}</h3>
//          <small class="type">Type: <span>${type}</span> </small>
//      </div>
//      `;
 
//     pokemonEl.innerHTML = pokemonInnerHTML;
 

//  };
 

  return (
    <div>
      <div className='mt-16'></div>
      <div class="mx-36 grid grid-cols-6 gap-4">

      { pokedata.map((pokemon ,index)=> {

        return(
          <div> 
               <Card pokemon={pokemon} />
          </div>
        )

        })}

        
      </div>
      
    </div>
  );
}

export default App;
