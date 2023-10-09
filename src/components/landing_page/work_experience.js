import React, { useLayoutEffect, useContext, useState } from 'react';

import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';

const WorkExperience = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({
    workInformation: [],
  });

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

  const padding_top_value = (window.innerHeight / 4)




  return (
    <section id="work_experience" className="min-h-screen bg-gray-800 mt-36" >
      <div className='mx-5 lg:mx-16 xl:mx-56 bg-black grid grid-rows-4 px-5 lg:px-10 py-5 relative' id='about_cards'>
        {textContent.workExperienceTitle && (
          <>
            <div className="text-left border-solid border-b-2 border-white flex justify-start items-end xl:w-1/2 relative z-10">
              <h2 className='text-4xl lg:text-6xl font-gloock px-5 title_text text-extrawhite' id='about_title'>{textContent.workExperienceTitle}</h2>
            </div>
          </>
        )}
        {textContent.workInformation.map((information, index) => (
          <>
            {index % 2 === 0 ? (
              <div key={index} className="flex flex-col lg:grid grid-cols-2 text-left border-solid border-b-2 border-white lg:items-end mt-28 lg:px-5 lg:px-10">
                <div className="flex justify-center lg:justify-start">
                  <h2 className='text-3xl lg:text-5xl font-gloock lg:px-5 relative z-10 subtitle_text text-extrawhite lg:w-1/2'>{information.title}</h2>
                </div>
                <div className='flex justify-end'>
                  <p className='text-center text-extrawhite'>{information.description}</p>
                </div>
              </div>     
            ) : (
              <div key={index} className="flex flex-col-reverse items-center lg:items-end lg:grid grid-cols-2 text-right border-solid border-b-2 border-white mt-28 lg:px-10">
                <p className='text-center text-extrawhite'>{information.description}</p>
                <div className="flex justify-center lg:justify-end">
                  <h2 className='text-3xl lg:text-5xl font-gloock lg:px-5 relative z-10 subtitle_text text-extrawhite lg:w-1/2'>{information.title}</h2>
                </div>
              </div>     
            )}
          </>
        ))}
      </div>

    </section>
  );
};

export default WorkExperience