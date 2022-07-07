import psyduck from '../images/psyduck.png'

export default function InfoPage() {
  return (
    <div className='info'>
      <img src={psyduck} alt='psyduck' />
      <h1 className='heading'>Who are Pokemon?</h1>
      <p className='paragraph'>Pokémon are creatures of all shapes and sizes who live in the wild or alongside their human partners (called “Trainers”). During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon. Hundreds of known Pokémon inhabit the Pokémon universe, with untold numbers waiting to be discovered!</p>
      <button className='button'>Know More</button>
    </div>
  )
}
