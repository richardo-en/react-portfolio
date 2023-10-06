import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import Ilustration from '../../static/images/stand_position_me.JPG'
import LanguageContext from '../../additional_components/language_context';
import Footer from '../../additional_components/footer';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="contact" className="min-h-screen bg-gray-800 grid grid-cols-3 px-20 py-20">
      <div className='flex flex-col self-center'>
        <h2 className='text-lg lg:text-6xl font-gloock px-5 relative z-10 title_text text-extrawhite mb-5'>{textContent.contact_titel}</h2>
        <p className='self-start text-sm lg:text-base text-extrawhite '>{textContent.contact_description}</p>
      </div>
      <div className='self-center mx-10'>
        <img src={Ilustration} alt="Image Alt" className='rounded-2xl h-full' id='contact_image' />
      </div>
      <div className='self-center mx-10 grid grid-rows-2'>
        <h2 className='text-center text-lg lg:text-6xl font-gloock px-5 relative z-10 title_text text-extrawhite mb-5'>Social media</h2>
        <div className='flex flex-col justify-around items-center h-96'>
          <button className='w-full mx-auto'>
          </button>
          <div className='w-1/2 mx-auto h-20 linked'></div>
          <div className='w-1/2 mx-auto h-20 gmail'></div>
          <div className='w-1/2 mx-auto h-20 twitter'></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
