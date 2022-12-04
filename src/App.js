import './App.css';
import React , { useState, useEffect } from "react";
import Card from './components/card'
import Header from './components/header'

function App() {

  const [pokedata , setPokeData] = useState([]);  
  const [count , setCount] = useState('102');  

  

  useEffect(() => {
      getPokemons();
  }, [count]);


 const getPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${count}`;

    fetch(url).then(res=>res.json())
        .then(response=>{
          console.log(response);
          setPokeData(response.results);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
 };


  return (
    <div>
      <Header/>
      <div className='xl:mt-44 mt-36'></div>
      <div class="lg:mx-36 xl:mx-5 mb-5 mx-5">
                <select name="cars" id="cars"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  >
                        <option value="102" selected  >102</option>
                        <option value="50">50</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="750">750</option>
                        <option value="1000">1000</option>
                  </select>
      </div>
      <div class="md:mx-36 xl:mx-5  md:grid md:grid-cols-6 grid-cols-4 gap-4 mx-5">

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
