import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import Ilustration from '../../static/images/personal_transparent_min.png'
import LanguageContext from '../../additional_components/language_context';
// import { LazyLoadImage } from "react-lazy-load-image-component";

const InterestSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="interest" className="grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-2">
      <div className='px-5 relative z-10 col-span-2 lg:col-start-1 lg:col-span-3 self-center text-center'>
        <h2 className='text-5xl lg:text-6xl xl:text-8xl font-gloock title_text'>{textContent.interestReasonTitle}</h2>
      </div>
      {textContent.interestInformation && (
        <>        
        <div className='row-start-2 col-span-2 lg:col-span-1 p-5 mx-3 lg:mx-0 md:p-10 self-center border-solid border-b-2 border-black'>
          <h2 className='text-2xl lg:text-6xl relative z-10 font-gloock subtitle_text'>{textContent.interestInformation[0].title}</h2>
            <p className='text-sm lg:text-base'>{textContent.interestInformation[0].description}</p>
        </div>
        <div className='row-start-3 col-start-1 lg:row-start-2 lg:col-start-2 self-start lg:self-center'>
          <img src={Ilustration} alt="Personal photos" className='rounded-2xl h-full' id='interest_image' />
        </div>
        <div className='row-start-3 lg:col-start-3 lg:row-start-2 p-5 md:p-10 self-center border-solid border-b-2 border-black '>
          <h2 className='text-2xl lg:text-6xl relative z-10 font-gloock subtitle_text'>{textContent.interestInformation[1].title}</h2>
            <p className='text-sm lg:text-base'>{textContent.interestInformation[1].description}</p>
        </div>
        <div className='row-start-4 col-span-2 lg:row-start-3 lg:col-start-2 lg:ml-32 md:p-10 border-solid ml-5 border-l-2 border-black lg:border-extrawhite lg:mt-20 h-40 lg:h-60 xl:self-end'>
          <h2 className='text-2xl lg:text-6xl relative z-10 font-gloock subtitle_text lg:text-extrawhite'>{textContent.interestInformation[2].title}</h2>
            <p className='text-sm lg:text-base lg:text-extrawhite'>{textContent.interestInformation[2].description}</p>
        </div>
        </>        
      )}
    </section>
  );
};

export default InterestSection;
