import React from 'react';
import MyGallery from '../components/certificates_page/certificate_gallery';
import { useLayoutEffect } from 'react';
 

const Certificates = () => {
  useLayoutEffect(() => {
    document.body.style.overflowX = "hidden"
  })

      return (
        <>
          <MyGallery />
        </>
      );
};

export default Certificates;
