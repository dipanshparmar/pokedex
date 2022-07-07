export default function StatTile({ title, value }) {
  return (
    <div className='stat-tile'>
      <p className='stat-tile-text'>{title}</p>
      <p className='stat-tile-value'>{value} </p>
    </div>
  )
}