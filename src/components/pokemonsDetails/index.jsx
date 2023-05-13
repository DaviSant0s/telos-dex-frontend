import React from 'react';
import './index.css';
import Pokeball from './Pokeball.png';
import pokemon1 from './pokemon1.png';
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import TypePokemon2 from '../typePokemon2';


export default function PokemonsDetails() {
  return (
    <div className='details-container'>
        <img className='pokeball' src={Pokeball} alt="pokeball" />
        <img className='pokemon1-detail' src={pokemon1} alt="pokemon1" />
        <div className='details-content'>
            <div className='type-pokemon'>
              <TypePokemon2 
              type1={'Grass'} 
              type2={'Poison'} 
              color1={'#74CB48'} 
              color2={'#A43E9E'} 
              width1={'46px'} 
              width2={'51px'}
              />

              <div className='aboutPokemon'>About</div>

              <div className='especificationsPokemon'>
                <div className='weight especificatios'>
                  <div className='measure-weight measure'><img src={icon1} alt="iconWeight" />6,9 kg</div>
                  <span>Weight</span>
                </div>

                <div className='height especificatios'>
                  <div className='measure-height measure'><img src={icon2} alt="iconHeight" />0,7 m</div>
                  <span>Height</span>
                </div>

                <div className='moves especificatios'>
                  <div className='measure-moves'><span>Chlorophyll</span><span>Overgrow</span></div>
                  <span>Moves</span>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
