import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    '/images/animation.jpg', // 替換為你的圖片路徑
    '/images/project1.jpg',
    '/images/project2.jpg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* 左側箭頭 */}
      <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75">
        &#8249;
      </button>

      {/* 圖片 */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 右側箭頭 */}
      <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-75">
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
