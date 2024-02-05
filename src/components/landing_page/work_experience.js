import React, { useLayoutEffect, useContext, useState } from 'react';

import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';

const WorkExperience = React.forwardRef((props, ref) => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({
    workInformation: [],
  });

  const SubTitleClass = 'mb-5 z-10 w-full relative text-center text-extrawhite'
  const titelClass = 'flex h-full items-center justify-center'
  const pContainer = 'flex justify-end h-full items-center'
  const mainContainer = 'border-solid border-b-2 border-white flex'
  const subContainer = 'lg:grid grid-cols-2 lg:items-end h-72 sm:h-56 lg:h-72 lg:px-2'
  useLayoutEffect(() => {
    const setCoverPositionsAndSizes = () => {
      const card_buttons = []
      card_buttons.push(document.querySelectorAll(".card_first"))
      card_buttons.push(document.querySelectorAll(".card_second"))
      for (let i = 0; i < card_buttons.length; i++) {
        var right = 10;
        var zIndex = 30;
        for (let a = 0; a < card_buttons[i].length; a++) {
          card_buttons[i][a].style.right = card_buttons[i][a].style.right + right + "px"
          card_buttons[i][a].style.top = card_buttons[i][a].style.top + right + "px"
          card_buttons[i][a].classList.add = "z-" + zIndex
          right += 75;
          zIndex += 10;
        }

      }
    };

    setTimeout(() => {
      setCoverPositionsAndSizes();
    }, 100);
    setTextContent(language === 'Slovak' ? slovakText : englishText);



  }, [language]);

  // const padding_top_value = (window.innerHeight / 4)




  return (
    <section id="work_experience" ref={ref} className="fade-in-out bg-gray-800 mt-36 pb-20 px-5 lg:pb-0" >
      <div className='lg:mx-2 bg-black grid grid-rows-4 px-2 py-5 relative lg:px-16' id='about_cards'>
        {textContent.workExperienceTitle && (
          <>
            <div className="border-solid border-b-2 border-white flex justify-start items-end relative z-10">
              <h2 className='px-2 text-extrawhite' id='about_title'>{textContent.workExperienceTitle}</h2>
            </div>
          </>
        )}
        {textContent.workInformation.map((information, index) => (
          <>
            {index % 2 === 0 ? (
              <div key={index} className={`${mainContainer} flex-col ${subContainer}`}>
                <div className={`${titelClass} lg:justify-start`}>
                  <h3 className={SubTitleClass}>{information.title}</h3>
                </div>
                <div className={pContainer}>
                  <p className='text-center text-extrawhite'>{information.description}</p>
                </div>
              </div>     
            ) : (
              <div key={index} className={mainContainer + " flex-col-reverse items-center  text-right " + subContainer}>
                <div className={pContainer}>
                <p className='text-center text-extrawhite'>{information.description}</p>
                </div>
                <div className={`${titelClass} lg:justify-end`}>
                  <h3 className={SubTitleClass}>{information.title}</h3>
                </div>
              </div>     
            )}
          </>
        ))}
      </div>

    </section>
  );
});

export default WorkExperience