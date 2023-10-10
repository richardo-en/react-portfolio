import React, { useState, useEffect } from 'react';
import { Gallery } from 'react-grid-gallery';
import divi from '../../static/images/divi.png';
import flask from '../../static/images/flask.png';
import python from '../../static/images/python.png';
import seo1 from '../../static/images/seo1.png';
import seo2 from '../../static/images/seo2.png';
import sql from '../../static/images/sql.png';
import wp from '../../static/images/wp.png';
import Footer from '../../additional_components/footer';

const MyGallery = () => {

  const [RowHeight, setRowHeight] = useState(200);
  const [BoxMargin, setBoxMargin] = useState(5);

  useEffect(() => {
    const CalculateHeight = () => {
      var screenWidth = window.innerWidth

      if (screenWidth < 640) {
        setRowHeight(200);
        setBoxMargin(5);
      }else if (screenWidth <= 768) {
        setRowHeight(400);
        setBoxMargin(10);
      }else if (screenWidth <= 1024) {
        setRowHeight(400);
        setBoxMargin(9);
      }else if (screenWidth <= 1280) {
        setRowHeight(500);
      }else{
        setRowHeight(600);
      }  
      };


    window.addEventListener("resize", CalculateHeight);

    CalculateHeight();
    return () => {
      window.removeEventListener("resize", CalculateHeight);
    };
  },[]);

  const images = [
    {
      src: divi,
      thumbnail: divi,
      caption: 'Image 1',
    },
    {
      src: flask,
      thumbnail: flask,
      caption: 'Image 2',
    },
    {
      src: seo1,
      thumbnail: seo1,
      caption: 'Image 4'
    },
    {
      src: seo2,
      thumbnail: seo2,
      caption: 'Image 5',
    },
    {
      src: sql,
      thumbnail: sql,
      caption: 'Image 6',
    },
    {
      src: wp,
      thumbnail: wp,
      caption: 'Image 7',
    },
    {
      src: python,
      thumbnail: python,
      caption: 'Image 3',
    }
  ];

  return (
    <div className='px-14'>
      <Gallery images={images} rowHeight={RowHeight} margin={BoxMargin} id='certificate_gallery'/>
      <Footer />
    </div>
  );
};

export default MyGallery;
