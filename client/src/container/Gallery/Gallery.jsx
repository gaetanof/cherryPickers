import React from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__bg">
      <div className="app__gallery flex__center">
        <div className="app__gallery-content">
          <h1 className="app__Gallery-h1">Showroom.</h1>
          <p className="p__raleway">
            Estas unidades ya cuentan con nuestro servicio integral.
          </p>
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[
              images.fotoGallery1,
              images.fotoGallery2,
              images.fotoGallery3,
              images.fotoGallery4,
            ].map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll('left')}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll('right')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
