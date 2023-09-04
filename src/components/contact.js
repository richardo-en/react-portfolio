import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import Ilustration from '../static/images/test_photo.webp'
import LanguageContext from '../additional_components/language_context';

const ContactSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)},[language]);

  return (
    <section id="contact" className="min-h-screen bg-gray-700 flex flex-col md:flex-row">
      <div className='flex flex-col p-5 md:p-10 justify-around '>
        <div className='bg-white text-center p-5'>
          <h2 className='text-lg sm:text-xl md:text-2xl'>{textContent.contact_titel}</h2>
          <p className='text-sm lg:text-base'>{textContent.contact_description}</p>
        </div>
      </div>
      <div className='my-auto'>
        <img src={Ilustration} alt="Illustration" className='rounded-2xl w-1/2'/>
      </div>
    </section>
  );
};

export default ContactSection;
