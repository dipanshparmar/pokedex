import { useState } from 'react'

export default function Carousel({ images }) {
  // getting the carousel index, defaults to 0
  const [carouselIndex, setCarouselIndex] = useState(0)

  // grab two images according to the index and add them to the carousel
  const carouselImages = images.slice(carouselIndex * 2, carouselIndex * 2 + 2).map(imageUrl => (
    <div key={imageUrl} className='img' style={{
      backgroundImage: `url(${imageUrl})`
    }}></div>
  ))

  // variable to decide whether the images are left or not
  const areImagesLeft = carouselIndex * 2 + 2 < images.length

  return (
    <div className='carousel'>
      <div className='images'>
        {carouselImages}
      </div>
      <div className='controls'>
        <button className='back control' style={{
          color: carouselIndex === 0 ? 'grey': 'black',
          pointerEvents: carouselIndex === 0 ? 'none': 'all'
        }} onClick={() => setCarouselIndex(prevCarouselIndex => prevCarouselIndex - 1)}>&#8592;</button>
        <span className='carousel-no'>{carouselIndex + 1} of {Math.ceil(images.length / 2)}</span>
        <button className='next control' style={{
          color: areImagesLeft ? 'black': 'grey',
          pointerEvents: areImagesLeft ? 'all': 'none'
        }} onClick={() => setCarouselIndex(prevCarouselIndex => prevCarouselIndex + 1)}>&#8594;</button>
      </div>
    </div>
  )
}