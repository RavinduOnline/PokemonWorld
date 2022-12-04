import React from 'react'
import Logo from "./Images/Pokedex_logo.png"
import DevLogo from "./Images/dev-logo.png"



export default function header() {
  return (
    <header>
        <div>
        <div>
                <nav class="fixed  z-20	 top-0 w-full bg-white border-gray-200 px-4 lg:px-6 py-8 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://pokedexnet.web.app/" class="flex items-center">
                            <img src={Logo} class="mr-3 h-12 sm:h-20" alt="Flowbite Logo" />
                        </a>
                        <div class="flex items-right lg:order-2">
                            <a href="https://ravindurasanga.web.app" class="flex flex-col items-center">
                                <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Developed by</span>
                                <img src={DevLogo} class="mr-3 h-8" alt="Flowbite Logo" />
                            </a>
                        </div>
                    
                    </div>
                </nav>
            </div>     
        </div>
    </header>
  )
}
