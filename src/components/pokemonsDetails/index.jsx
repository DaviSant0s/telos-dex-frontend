import React from 'react';
import './index.css';
import Pokeball from './Pokeball.png';
import pokemon1 from './pokemon1.png';

export default function PokemonsDetails() {
  return (
    <div className='details-container'>
        <img className='pokeball' src={Pokeball} alt="pokeball" />
        <img className='pokemon1-detail' src={pokemon1} alt="pokemon1" />
        <div className='details-content'></div>
    </div>
  )
}
