import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

function HomeSectionCarousel({ data, sectionName }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0, 15).map((item, index) => (
    <div key={item.id || index} className="px-2">
      <HomeSectionCard product={item} />
    </div>
  ));

  const itemsToShow = 5;
  const lastIndex = items.length - itemsToShow;

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>

      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          mouseTracking
          infinite={false}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={(e) => setCurrentIndex(e.item)}
        />

        {/* NEXT */}
        {currentIndex < lastIndex && (
          <Button
            onClick={() => carouselRef.current.slideNext()}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
              zIndex: 50,
            }}
          >
            <ArrowBackIosIcon
              sx={{ transform: 'rotate(90deg)', color: 'black' }}
            />
          </Button>
        )}

        {/* PREV */}
        {currentIndex > 0 && (
          <Button
            onClick={() => carouselRef.current.slidePrev()}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0',
              transform: 'translateX(-50%) rotate(-90deg)',
              bgcolor: 'white',
              zIndex: 50,
            }}
          >
            <ArrowBackIosIcon
              sx={{ transform: 'rotate(90deg)', color: 'black' }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
