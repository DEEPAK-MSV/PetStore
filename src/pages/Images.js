import React, { useState } from 'react';

const images = [
  'https://petshopindia.com/image/cache/catalog/banner1/petshopindia%20cat-1450x400.jpg',
  'https://petshopindia.com/image/cache/catalog/banner1/petshopindia%20%20tick-1450x400.jpg',
  'https://petshopindia.com/image/cache/catalog/banner1/fekrix%20petshopindia-1450x400.jpg'
];

function Images() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className='h-96'>
      <div className='w-full h-20 bg-orange '>

      </div>
      <div className='w-full flex justify-center pt-8 relative'>
        <img className='w-4/5 h-2/4 transform duration-300 rounded-xl' src={images[currentImageIndex]} alt='Pet' />
        <button className='absolute top-1/2 left-4 pl-10 transform -translate-y-1/2 text-4xl hover:text-6xl' onClick={handlePrevClick}>
          {'<'}
        </button>
        <button className='absolute top-1/2 right-4 pr-10 transform -translate-y-1/2 text-4xl hover:text-6xl' onClick={handleNextClick}>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Images;
