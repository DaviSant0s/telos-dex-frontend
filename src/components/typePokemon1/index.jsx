import React from 'react'
import './index.css';

export default function TypePokemon1( {type, color, width}) {
  return (
        <div style={{backgroundColor: `${color}`, width:`${width}` }} className='type-1'>{type}</div>
  )
}
