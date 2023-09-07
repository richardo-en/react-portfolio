import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import Ilustration from '../static/images/test_photo.webp'
import LanguageContext from '../additional_components/language_context';

const ContactSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });
  
  useLayoutEffect(() => {
    setTimeout(() => {
      if (window.innerWidth <= 465) {        
        const image_center = document.getElementById("contact_image");
        var width = image_center.width;
        image_center.parentElement.style.left = ((window.innerWidth - width)/2 )+ "px"
      }
    }, 500);
  })

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)},[language]);

  return (
    <section id="contact" className="min-h-screen relative bg-gray-700 flex items-start xl:items-center overflow-hidden">
      <div className='flex flex-col p-5 md:p-10 justify-around xl:w-4/6'>
        <div className='bg-white text-center p-5'>
          <h2 className='text-lg sm:text-xl md:text-2xl'>{textContent.contact_titel}</h2>
          <p className='text-sm lg:text-base'>{textContent.contact_description}</p>
        </div>
      </div>
      <div className='absolute h-4/6 bottom-0 md:right-0 md:flex-none xl:h-full'>
        <img src={Ilustration} alt="Illustration" className='rounded-2xl h-full' id='contact_image'/>
      </div>
    </section>
  );
};

export default ContactSection;
