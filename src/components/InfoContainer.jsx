export default function InfoContainer({ heading, tiles }) {
  return (
    <div className='info-container'>
      <h4 className='info-container-heading'>{heading}</h4>
      <div className='tiles'>
        {tiles.map(tile => tile)}
      </div>
    </div>
  )
}