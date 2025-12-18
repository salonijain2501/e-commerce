import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouseldata';

const MainCarousel = () => {
  const items = mainCarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer w-full h-auto"
      role="presentation"
      src={item.image}
      alt=""
      onClick={() => console.log("Clicked!")}
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      mouseTracking
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  );
};

export default MainCarousel;
