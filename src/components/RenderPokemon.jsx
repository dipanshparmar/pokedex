import { useEffect, useState } from 'react'
import InfoContainer from './InfoContainer'
import InfoTile from './InfoTile'
import StatTile from './StatTile'

export default function RenderPokemon({ pokemon }) {
  // state for pokemon data
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    fetchPokemonInfo()
    .then(() => console.log(pokemonData))
    .catch(err => console.log(err))
  }, [])

  // function to fetch the pokemon
  async function fetchPokemonInfo() {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = await res.json()

      // setting the data
      setPokemonData(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {
        Object.keys(pokemonData).length === 0
        ? 'Loading ...'
        : <>
          <div className='intro'>
            {console.log(pokemonData)}
            <img src={pokemonData['sprites']['other']['official-artwork']['front_default']} alt='photo' />
          </div>
          <div className='additional-info'>
            <div className='stats'>
              <StatTile title='HP' value={pokemonData.stats[0]['base_stat']} />
              <StatTile title='Attack' value={pokemonData.stats[1]['base_stat']} />
              <StatTile title='Defense' value={pokemonData.stats[2]['base_stat']} />
              <StatTile title='Sp. attack' value={pokemonData.stats[3]['base_stat']} />
              <StatTile title='Sp. defense' value={pokemonData.stats[4]['base_stat']} />
              <StatTile title='Speed' value={pokemonData.stats[5]['base_stat']} />
            </div>
            <div className='type'>
              <InfoContainer heading='Type' tiles={[pokemonData.types.map(type => <InfoTile key={type.type.name} value={type.type.name} />)]} />
            </div>
            <div className='weight'>
              <InfoContainer heading='Weight' tiles={[<InfoTile value={`${(pokemonData.weight * .1).toFixed(2)} Kg`} />]} />
            </div>
            <div className='abilities'>
              <InfoContainer heading='Abilities' tiles={[pokemonData.abilities.map(ability => <InfoTile key={ability.ability.name} value={ability.ability.name} />)]} />
            </div>
            <div className='moves'>
              <InfoContainer heading='Moves' tiles={[pokemonData.moves.map(move => <InfoTile key={move.move.name} value={move.move.name} />)]} />
            </div>
          </div>
        </>
      }
    </>
  )
}
