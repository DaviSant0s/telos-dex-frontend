import React from 'react';
import './index.css';
import PokemonButton from '../../components/pokemonButton';

import image1 from './image/pokemon1.png'
import image2 from './image/pokemon2.png'
import image3 from './image/pokemon3.png'
import image4 from './image/pokemon4.png'
import image5 from './image/pokemon5.png'
import image6 from './image/pokemon6.png'
import image7 from './image/pokemon7.png'
import image8 from './image/pokemon8.png'
import image9 from './image/pokemon9.png'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
          
        <PokemonButton image={image1} name={'Bulbasaour'} id={'#001'}/>
        <PokemonButton image={image2} name={'Charmander'} id={'#004'}/>
        <PokemonButton image={image3} name={'Squirtle'} id={'#007'}/>
        <PokemonButton image={image4} name={'Butterfree'} id={'#012'}/>
        <PokemonButton image={image5} name={'Pikachu'} id={'#025'}/>
        <PokemonButton image={image6} name={'Gastly'} id={'#092'}/>
        <PokemonButton image={image7} name={'Ditto'} id={'#132'}/>
        <PokemonButton image={image8} name={'Mew'} id={'#152'}/>
        <PokemonButton image={image9} name={'Aron'} id={'#304'}/>
          
      </div>
    </div>
  )
}
