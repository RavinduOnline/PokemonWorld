import React from 'react'


export default function card() {
  return (
    <div>
        <div className='relative bg-white w-full rounded-lg overflow-hidden shadow-lg shadow-cyan-500/50'>  

            <div  class="absolute h-40	w-full rounded-bl-full rounded-br-full" style={{backgroundColor: "#82C3FF"}} />

            <div className='h-56  flex  flex-col justify-end items-center'>
                  <div className='relative flex flex justify-center '>
                        <img   className='w-2/3'  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"/>   
                  </div>  
            </div>
            <div className='mb-4 mt-4 w-full flex  flex-col justify-center items-center'>
              <h1 className='text-3xl font-bold' >Gastly</h1>
              <h3 className='text-md font-medium	'>Ghost</h3>
            </div>
        </div>

    </div>
  )
}