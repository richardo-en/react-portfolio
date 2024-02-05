import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import Ilustration from '../../static/images/personal_transparent_min.png'
import LanguageContext from '../../additional_components/language_context';

const InterestSection = React.forwardRef((props, ref) => {

  const point_description = 'p-2'
  const subtitle_text = 'relative z-10 p-2 lg:p-0 lg:pl-2'
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="interest" ref={ref} className="fade-in-out grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-2 sm:mb-32 py-20 sm:py-12">
      <div className='px-5 relative z-10 col-span-2 lg:col-start-1 lg:col-span-3 self-center text-center'>
        <h2>{textContent.interestReasonTitle}</h2>
      </div>
      {textContent.interestInformation && (
        <>        
        <div className='row-start-2 col-span-2 sm:col-span-1 pl-3 self-center md:self-end border-solid border-b-2 border-black'>
          <h3 className={subtitle_text}>{textContent.interestInformation[0].title}</h3>
            <p className={point_description}>{textContent.interestInformation[0].description}</p>
        </div>
        <div className='row-start-3 col-start-1 lg:row-start-2 lg:col-start-2 self-start lg:self-center'>
          <img src={Ilustration} alt="Personal photos" className='max-w-full rounded-2xl h-full' id='interest_image' />
        </div>
        <div className='row-start-3 lg:col-start-3 lg:row-start-2 self-center pr-3 border-solid border-b-2 border-black '>
          <h3 className={subtitle_text}>{textContent.interestInformation[1].title}</h3>
            <p className={point_description}>{textContent.interestInformation[1].description}</p>
        </div>
        <div className='row-start-4 col-span-2 lg:row-start-3 lg:col-start-2 sm:col-start-1 pr-3 lg:ml-32 border-solid ml-5 border-l-2 border-black lg:border-extrawhite lg:mt-32 h-40 xl:self-end'>
          <h3 className={`${subtitle_text} lg:text-extrawhite`}>{textContent.interestInformation[2].title}</h3>
            <p className={`${point_description} lg:text-extrawhite`}>{textContent.interestInformation[2].description}</p>
        </div>
        </>        
      )}
    </section>
  );
});

export default InterestSection;
