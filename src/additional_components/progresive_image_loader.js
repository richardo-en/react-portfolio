// ProgressiveImage.js
import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ preview, src, alt }) => {
  const [image, setImage] = useState(preview);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImage(src);
    };
  }, [src]);

  return <img className='w-full mb-5 lg:w-1/2 rounded-lg -mt-40 relative z-40' id='contact_image' key={image} src={image} alt={alt} />;
};

export default ProgressiveImage;
