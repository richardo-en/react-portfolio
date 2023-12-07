import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import Ilustration from '../../static/images/stand_position_me.webp'
import LanguageContext from '../../additional_components/language_context';
import Footer from '../../additional_components/footer';
// import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="contact" className="min-h-screen bg-gray-800 flex flex-col items-center xl:grid xl:grid-cols-3 px-3 py-5 xl:px-20 xl:py-20 mt-20">
      <div className='flex flex-col lg:self-center mb-10'>
      <div className='w-4/5 mx-auto lg:w-full relative z-10 mb-5 text-center'>
          <h2 className='text-4xl lg:text-5xl font-gloock px-5 title_text text-extrawhite'>{textContent.contact_titel}</h2>
        </div>
        <p className='self-start text-sm lg:text-lg text-extrawhite text-center'>{textContent.contact_description}</p>
      </div>
      <div className='lg:self-center mx-10 mb-10'>
        <img src={Ilustration} alt="Me with black background" className='rounded-2xl h-full' id='contact_image' />
      </div>
      <div className='self-center lg:mx-10 flex flex-col lg:grid grid-rows-2 w-full'>
        <div className='text-center px-5 relative z-10 mb-5'>
          <h2 className='text-3xl lg:text-5xl xl:text-6xl font-gloock title_text text-extrawhite'>Social media</h2>
        </div>
        <div className='flex lg:flex-col justify-around items-center lg:h-96'>
          <a href='https://www.linkedin.com/in/richard-nemeth-40b144241/' className='w-1/3 mx-2 lg:w-1/2 lg:mx-auto h-20 linked'><button></button></a>
          <a href='mailto:richard3.nemeth@gmail.com' className='w-1/3 mx-2 lg:w-1/2 lg:mx-auto h-20 gmail'><button></button></a>
          <a href='https://github.com/richardo-en' className='w-1/3 mx-2 lg:w-1/2 lg:mx-auto h-20 github'><button></button></a>
        </div>
      </div>
      < Footer/>
    </section>
  );
};

export default ContactSection;
