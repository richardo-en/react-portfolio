import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';

import { ReactComponent as FreelanceIcon } from '../../static/images/Freelance_Logo.svg'

const FreelanceIntro = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="freelance_intro" className="h-1/2 bg-gray-800 w-screen py-20 px-5 overflow-x-hidden	">
      <div className='flex items-center justify-around' >
        <div>
          <h1 className='text-6xl text-white p-5'>Possibility of freelancing<span className='text-6xl text-extrawhite'>.</span></h1>
        </div>
          <FreelanceIcon />
      </div>
      <div className='text-white text-xl flex flex-col items-center'>
        <h1 className='p-5 text-4xl'>Why do i want to freelance <span className='text-4xl text-red-600'>?</span></h1>
        <div className='flex'>
          <div className='flex flex-col bg-gray-900 mx-2 p-10'>
            <h1>Gain experience</h1>
            <span className='w-full h-px bg-white my-2' />
            <p className='text-base text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
          </div>
          <div className='flex flex-col bg-gray-900 mx-2 p-10'>
            <h1>Work with end customer</h1>
            <span className='w-full h-px bg-white my-2' />
            <p className='text-base text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceIntro;
