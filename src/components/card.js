import React , { useState, useEffect } from "react";


export default function Card({pokemon} ) {

  const pokemon_colors = {
    fire: '#FF7070',
    grass: '#82FF9D',
    electric: '#FFD73E',
    water: '#82C3FF',
    ground: '#CFB18E',
    rock: '#A08D77',
    fairy: '#FF92E0',
    poison: '#E39AFD',
    bug: '#B3E383',
    dragon: '#A0EEFF',
    psychic: '#FFC2F5',
    flying: '#8FA7A9',
    fighting: '#FFAF82',
    dark:'#A8A8A8',
    ice:'#AAE5FF',
    ghost:'#B8AECC',
    steel:'#9ABFB6',
    normal:'#AF95C3',
 };

  const [pokemonData , setPokemonData] = useState([]);
  const [getpokemonType , setGetPokemonType] = useState([]);
  const [url, setUrl] = useState('');
  const [pokemonType , setPokemonType] = useState('');
  const [color , setColor] = useState('');


  useEffect(() => {
    getPokemonData();
  },[pokemon]);


const getPokemonData = async () => {
    const url = pokemon.url;

    fetch(url).then(res=>res.json())
        .then(response=>{
          console.log(response);
          setPokemonData(response);
          setGetPokemonType(response.types)
          setUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`);
          getType();
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
 };

const getType = () => {

    const poke_types = getpokemonType.map((type) => type.type.name);
    setPokemonType(poke_types.find((type) => poke_types.indexOf(type) > -1));
    const pokeType = poke_types.find((type) => poke_types.indexOf(type) > -1);
    setColor(pokemon_colors[pokeType]);
    console.log(pokeType);
}


  return (
    <div>
        <div className='relative bg-white w-full rounded-lg overflow-hidden shadow-lg shadow-cyan-500/50'>  

            <div  class="absolute h-40	w-full rounded-bl-full rounded-br-full" style={{backgroundColor:color}} />

            <div className='h-56  flex  flex-col justify-end items-center'>
                  <div className='relative flex flex justify-center '>
                        <img   className='w-2/3'  src={url} alt="Pokemon Img"/>   
                  </div>  
            </div>
            <div className='mb-4 mt-4 w-full flex  flex-col justify-center items-center' >
              <h1 className='text-3xl font-bold' >{pokemonData.name}</h1>
              <h3 className='text-md font-medium	'>{pokemonType}</h3>
            </div>
        </div>

    </div>
  )
}