import Carousel from '../components/Carousel'
import logo from '../images/pokemon-logo.png'
import charizard from '../images/charizard.png'

export default function HomePage() {
  // images
  const images = [
    'https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon',
    'https://content.fortune.com/wp-content/uploads/2021/03/web_Pokemon_the_Movie_Secrets_of_the_Jungle_Screenshot_2.jpg',
    'https://m.media-amazon.com/images/M/MV5BY2E4MTFmMGYtZDQ1MS00NzgyLWExNTYtZWU1NGEyOGVjNGE3XkEyXkFqcGdeQWpnYW1i._V1_.jpg'
  ]

  return (
    <div className='home'>
      <div className='background'></div>
      <Header />
      <div className='content'>
        <div className='data'>
          <div className='data-text'>
            <h1 className='text-heading'>gotta catch' em all!</h1>
            <p className='text-paragraph'>Pokémon is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures.</p>
            <button className='button'>know more</button>
          </div>
          <Carousel images={images} />
        </div>
        <img className='content-img' src={charizard} alt='charizard' />
      </div>
    </div>
  )
}

// header
function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
    </div>
  )
}
