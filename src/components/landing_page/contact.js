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
    <section id="contact" className="min-h-screen bg-gray-800 grid grid-cols-3 grid-rows-5 px-20 py-20">
      <h2 className='text-lg lg:text-6xl font-gloock px-5 relative z-10 title_text text-extrawhite self-end mb-5'>{textContent.contact_titel}</h2>
      <p className='row-start-2 self-start text-sm lg:text-base text-extrawhite '>{textContent.contact_description}</p>
      <h2 className='row-start-3 col-start-2 self-start text-lg lg:text-6xl font-gloock px-5 relative z-10 title_text text-extrawhite self-end mb-5'>Social media</h2>
      <div className='bg-white w-1/2 ml-20 h-20 self-center row-start-4'><h3 className='text-center text-xl'>linked in</h3></div>
      <div className='bg-white w-1/2 ml-20 h-20 self-center row-start-4'><h3 className='text-center text-xl'>Email</h3></div>
      <div className='bg-white w-1/2 ml-20 h-20 self-center row-start-4'><h3 className='text-center text-xl'>social media</h3></div>
      <div className='row-start-2 col-start-3 self-center self-center'>
        {/* Lazy load the image */}
        <LazyLoadImage src={Ilustration} alt="Image Alt" className='rounded-2xl h-full' id='contact_image' />
      </div>
    </section>
  );
};

export default ContactSection;
