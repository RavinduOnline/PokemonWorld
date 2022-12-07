import React , { useState, useEffect } from "react";


export default function Card({pokemon , index} ) {

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

 const pokemon_Icon = {
  fire: "/images/fire.png",
  grass: '/images/grass.png',
  electric: '/images/electric.png',
  water: '/images/water.png',
  rock: '/images/rock.png',
  fairy: '/images/fairy.png',
  poison: '/images/poison.png',
  bug: '/images/bug.png',
  dragon: '/images/dragon.png',
  psychic: '/images/psychic.png',
  flying: '/images/flying.png',
  fighting: '/images/fighting.png',
  dark:'/images/dark.png',
  ice:'/images/ice.png',
  ghost:'/images/ghost.png',
  steel:'/images/steel.png',
  normal:'/images/normal.png',
};

  const [pokemonData , setPokemonData] = useState([]);
  const [url, setUrl] = useState('');
  const [pokemonType , setPokemonType] = useState('');
  const [color , setColor] = useState('');
  const [icon , setIcon] = useState('');



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
    setIcon(pokemon_Icon[pokeType]);
}


  return (
    <div>
        <div className='mb-8 relative bg-white w-full rounded-lg overflow-hidden shadow-lg shadow-cyan-500/50'>  

            <div  class="absolute h-1/2	w-full rounded-bl-full rounded-br-full" style={{backgroundColor:color}} />
            <div  class="absolute h-1/2 w-full rounded-bl-full rounded-br-full opacity-5 bg-black"/>

            <div  class="absolute mt-2 ml-3 text-white font-extrabold drop-shadow-md">#{index}</div>

            <div className='mt-5 flex  flex-col justify-end items-center'>
                  <div className='relative flex  justify-center '>
                        <img   className='lg:w-2/3 w-3/6'  src={url} alt=""/>   
                  </div>  
            </div>
            <div className='mb-4 mt-4 w-full flex  flex-col justify-center items-center' >
              <h1 className='text-3xl font-bold capitalize text-center' >{pokemonData.name}</h1>
              <div className="flex mt-1">
                <img   className='w-5 h-5 justify-center items-center'  src={icon} alt=""/>   
                <h3 className='ml-1 text-md font-medium	capitalize'>{pokemonType}</h3>
              </div>
            </div>
        </div>

    </div>
  )
}