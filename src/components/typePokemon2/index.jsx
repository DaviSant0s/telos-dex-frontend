import React from 'react'
import './index.css';
import TypePokemon1 from '../typePokemon1';

export default function TypePokemon2( {type1, type2, color1, color2, width1, width2} ) {
  return (
    <div className='type-container-2'>
        <TypePokemon1 type={type1} color={color1} width={width1}/>
        <TypePokemon1 type={type2} color={color2} width={width2}/>
    </div>
  )
}
