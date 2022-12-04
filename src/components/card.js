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
          setPokemonData(response);
          getType(response);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
 };

const getType = (data) => {

    setUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
    const poke_types = data.types.map((type) => type.type.name);
    setPokemonType(poke_types.find((type) => poke_types.indexOf(type) > -1));
    const pokeType = poke_types.find((type) => poke_types.indexOf(type) > -1);
    setColor(pokemon_colors[pokeType]);
}


  return (
    <div>
        <div className='mb-8  relative bg-white w-full rounded-lg overflow-hidden shadow-lg shadow-cyan-500/50'>  

            <div  class="absolute md:h-28 lg:h-40 h-48	w-full rounded-bl-full rounded-br-full" style={{backgroundColor:color}} />
            <div  class="absolute md:h-28 lg:h-40	h-48 w-full rounded-bl-full rounded-br-full opacity-5" style={{backgroundColor:"#000000"}} />

            <div className='lg:h-56 md:h-36 h-80 flex  flex-col justify-end items-center'>
                  <div className='relative flex flex justify-center '>
                        <img   className='lg:w-2/3 w-3/6'  src={url} alt="Pokemon Img"/>   
                  </div>  
            </div>
            <div className='mb-4 mt-4 w-full flex  flex-col justify-center items-center' >
              <h1 className='text-3xl font-bold capitalize' >{pokemonData.name}</h1>
              <h3 className='text-md font-medium	capitalize'>{pokemonType}</h3>
            </div>
        </div>

    </div>
  )
}