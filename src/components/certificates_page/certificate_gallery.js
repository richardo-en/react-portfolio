import React from 'react';
import divi from '../../static/images/divi.png';
import flask from '../../static/images/flask_course.png';
import python from '../../static/images/python_course.png';
import seo1 from '../../static/images/seo1.png';
import seo2 from '../../static/images/seo2.png';
import sql from '../../static/images/sql.png';
import wp from '../../static/images/wp.png';

const MyGallery = () => {

  const images = [
    { src: divi, thumbnail: divi, caption: 'Image 1' },
    { src: seo1, thumbnail: seo1, caption: 'Image 4' },
    { src: seo2, thumbnail: seo2, caption: 'Image 5' },
    { src: sql, thumbnail: sql, caption: 'Image 6' },
    { src: wp, thumbnail: wp, caption: 'Image 7' },
    { src: python, thumbnail: python, caption: 'Image 3' },
    { src: flask, thumbnail: flask, caption: 'Image 2' }
  ];

  return (
    <div className='px-4 my-32 overflow-x-hidden'>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
