import React from 'react';
import './index.css';
import PokemonButton from '../../components/pokemonButton';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
          
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/>
        <PokemonButton/> 
          
      </div>
    </div>
  )
}
