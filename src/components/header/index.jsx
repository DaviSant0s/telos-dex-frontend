import React from 'react'
import image from './Pokeball.png'
import SearchIcon from '@mui/icons-material/Search';
import './index.css'

export default function Header() {
  return (
    <div className='header-container'>
        
        <div className='pokedex-content'>
            <img src={image} alt="Pokeball" />
            <span>Pokédex</span>
        </div>

        
        <form className='form-content' action="#" method="get" autoComplete='of'>
            <div className='input-content-icon'>
                <label for='iSearchPokemon'> < SearchIcon className='search-icon'/> </label>
                <input type='text' name='searchPokemon' id='iSearchPokemon' placeholder='Search'></input>
            </div>

            <button>
                #
            </button>
    
        </form>

    </div>
  )
}
