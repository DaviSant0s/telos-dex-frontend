import React from 'react'
import './index.css'

export default function PokemonButton( {image, name, id} ) {
  return (

      <button className='pokemonButtonContainer'>
        <div className='id-pokemon'>{id}</div>
        <div className='shadow-button'>{name}</div>
        <img src={image} alt="pokemon" />
      </button>
  )
}
