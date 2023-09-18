import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';

const FreelanceContent = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });
  const [ScaleOne, SetScaleOne] = useState()
  useEffect(() => {
    const titleRotation = () =>{
      const sectionOffset = document.getElementById("freelance_content").offsetTop;
      const sectionHeight = document.getElementById("freelance_content").clientHeight;
      var percentage = window.scrollY / sectionOffset;
      if (percentage <= 1.1) {
        document.getElementById("freelance_first_title").style.scale = (percentage ) 
      }
      if (percentage <= 1.7) {
        document.getElementById("freelance_second_title").style.scale = (percentage -0.6) 
      }
      // if (window.scrollY > sectionOffset) {
      // }
    }
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)

    window.addEventListener('scroll', titleRotation);

    return () => {
      window.removeEventListener('scroll', titleRotation);
    };
  }, [language]);

  return (
    <section id="freelance_content" className="h-1/2 bg-gray-800 w-screen py-20 px-5 text-white my-10 overflow-x-hidden	">
        <div className="flex justify-around items-center" id='freelance_first_content'>
            <h1 className='text-4xl underline' id='freelance_first_title'>Work experience</h1>
            <p className='w-1/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="flex justify-around items-center" >
            <h1 className='text-4xl underline' id='freelance_second_title'>Work experience</h1>
            <p className='w-1/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </section>
  );
};

export default FreelanceContent;
