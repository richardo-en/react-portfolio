import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import Ilustration from '../../static/images/personal_transparent.png'
import LanguageContext from '../../additional_components/language_context';
import { LazyLoadImage } from "react-lazy-load-image-component";

const InterestSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="interest" className="grid grid-cols-3 grid-rows-3 gap-2 -mt-96">
      <h2 className='text-lg lg:text-8xl font-gloock px-5 relative z-10 title_text col-start-2 self-end text-center'>{textContent.interestReasonTitle}</h2>
      {textContent.interestInformation && (
        <>        
        <div className='row-start-2 p-5 md:p-10 self-center border-solid border-b-2 border-black'>
          <h2 className='text-lg lg:text-6xl relative z-10 font-gloock subtitle_text'>{textContent.interestInformation[0].title}</h2>
            <p className='text-sm lg:text-base'>{textContent.interestInformation[0].description}</p>
        </div>
        <div className='row-start-2 col-start-2 self-center'>
          <img src={Ilustration} alt="Image Alt" className='rounded-2xl h-full' id='interest_image' />
        </div>
        <div className='row-start-2 col-start-3 p-5 md:p-10 self-center border-solid border-b-2 border-black'>
          <h2 className='text-lg lg:text-6xl relative z-10 font-gloock subtitle_text'>{textContent.interestInformation[1].title}</h2>
            <p className='text-sm lg:text-base'>{textContent.interestInformation[1].description}</p>
        </div>
        <div className='row-start-3 col-start-2 col-span-2 ml-96 md:p-10 border-solid border-l-2 border-extrawhite mt-40 h-96'>
          <h2 className='text-lg lg:text-6xl relative z-10 font-gloock subtitle_text text-extrawhite'>{textContent.interestInformation[2].title}</h2>
            <p className='text-sm lg:text-base text-extrawhite'>{textContent.interestInformation[2].description}</p>
        </div>
        </>        
      )}
    </section>
  );
};

export default InterestSection;
