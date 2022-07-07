import { useEffect, useState } from 'react'
import RenderPokemon from '../components/RenderPokemon'

export default function SearchPage() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    // fetching the pokemons
    fetch('https://pokeapi.co/api/v2/pokemon?limit=-1').then(res => res.json()).then(data => setPokemon(data.results))
    .catch(err => console.log(err))
  }, [])

  // search text state
  const [searchQuery, setSearchQuery] = useState('')
  
  // function to handle the input change
  function handleChange(e) {
    // setting the query value
    setSearchQuery(e.target.value)
  }

  // grabbing the pokemon where the name matches the query
  const matchingPokemon = pokemon.filter(pokemon => pokemon.name.includes(searchQuery))
  
  // function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

  // function to get suggestion tiles
  function getSuggestionTiles() {
    // shuffling the array
    shuffleArray(matchingPokemon)

    // grabbing first 5 values from the array
    const firstFiveData = matchingPokemon.slice(0, 5)

    // returning the suggestion tiles
    return firstFiveData.map(pokemon => (
      <div key={pokemon.name} className='suggestion-tile' onClick={() => {
        setSearchQuery(pokemon.name)
        document.querySelector('.pokemon-search').value = pokemon.name // updating the value in the DOM as well
      }}>
        {pokemon.name}
      </div>
    ))
  }

  return (
    <div className='search'>
      <h1 className='heading'>Ready to explore?</h1>
      <p className='paragraph'>Type in the Pokemon you would like to know about.</p>
      <input
        type='text'
        placeholder={pokemon.length === 0 ? 'Fetching the data ...': 'e.g. bulbasaur'}
        disabled={pokemon.length === 0}
        onChange={handleChange}
        className='pokemon-search'
      />
      <div className='suggestions'>
        {matchingPokemon.length === 0 ? 'No suggestions': getSuggestionTiles()}
      </div>

      {/* if valid pokemon name entered then render the pokemon */}
      {matchingPokemon.some(pokemon => pokemon.name === searchQuery) && <div className='results'>
        <RenderPokemon pokemon={searchQuery} />
      </div>}
    </div>
  )
}