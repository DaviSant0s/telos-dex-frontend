import React from 'react';
import './index.css';
import Pokeball from './Pokeball.png';
import pokemon1 from './pokemon1.png';
import TypePokemon2 from '../typePokemon2';


export default function PokemonsDetails() {
  return (
    <div className='details-container'>
        <img className='pokeball' src={Pokeball} alt="pokeball" />
        <img className='pokemon1-detail' src={pokemon1} alt="pokemon1" />
        <div className='details-content'>
            <div className='type-pokemon'>
              <TypePokemon2 type1={'Grass'} type2={'Poison'} color1={'#74CB48'} color2={'#A43E9E'} width1={'46px'} width2={'51px'}/>
            </div>
        </div>
    </div>
  )
}
