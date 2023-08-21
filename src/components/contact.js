import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import Ilustration from '../static/images/test_photo.jpg'
import LanguageContext from '../additional_components/language_context';

const ContactSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)},[language]);

  return (
    <section id="contact" className="min-h-screen bg-gray-700 flex p-20 justify-around">
      <div className='flex flex-col p-10 justify-around'>
        <div className='bg-mainelement text-center p-10 rounded-2xl'>
          <h1 className='text-3xl'>{textContent.contact_titel}</h1>
          <p>{textContent.contact_description}</p>
        </div>
      </div>
      <div className='my-auto ml-20'>
        <img src={Ilustration} alt="Illustration" className='w-1/2 rounded-2xl'/>
      </div>
    </section>
  );
};

export default ContactSection;
