import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';

import { ReactComponent as FreelanceIcon } from '../../static/images/Freelance_Logo.svg'

const FreelanceIntro = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ freelance_reasons: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="freelance_intro" className="h-1/2 bg-gray-800 w-screen py-20 px-5 overflow-x-hidden	mb-80">
      <div className='flex items-center justify-around' >
        <div>
          <h1 className='text-6xl text-white p-5'>{textContent.freelanc_intro}<span className='text-6xl text-extrawhite'>.</span></h1>
        </div>
        <FreelanceIcon />
      </div>
      <div className='text-white text-xl flex flex-col items-center'>
        <h1 className='p-5 text-4xl'>{textContent.freelance_intro_title} <span className='text-4xl text-red-600'>?</span></h1>
        <div className='flex'>
        {textContent.freelance_reasons &&
            textContent.freelance_reasons.map((reason, index) => (
              <div key={index} className="flex flex-col bg-gray-900 mx-2 p-10">
                <h1>{reason.title}</h1>
                <span className="w-full h-px bg-white my-2" />
                <p className="text-base text-center">{reason.context}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceIntro;
