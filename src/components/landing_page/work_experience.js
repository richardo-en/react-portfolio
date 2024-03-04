import React, { useLayoutEffect, useContext, useState, useEffect } from 'react';

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
  const mainContainer = 'border-solid border-b-2 border-extrawhite flex'
  const subContainer = 'lg:grid grid-cols-2 lg:items-end sm:h-56 lg:h-72 lg:px-2'
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            entry.target.classList.add('show'); 
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('work_experience');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);




  return (
    <section id="work_experience" ref={ref} className="work-experience fade-in-out sm:mt-36 pb-20 px-5 lg:pb-0" >
      <div className='lg:mx-2 grid grid-rows-4 px-5 py-5 relative lg:px-16' id='about_cards' style={{"background" : "#2f3440"}}>
        {textContent.workInformation.map((information, index) => (
          <>
            {index % 2 === 0 ? (
              <div key={index} className={`${mainContainer} flex-col ${subContainer}`}>
                <div className={`${titelClass} lg:justify-start`}>
                  <h2 className={SubTitleClass}>{information.title}</h2>
                </div>
                <div className={pContainer}>
                  <p className='text-justify text-extrawhite'>{information.description}</p>
                </div>
              </div>     
            ) : (
              <div key={index} className={mainContainer + " flex-col-reverse items-center text-right " + subContainer}>
                <div className={pContainer}>
                <p className='text-justify text-extrawhite'>{information.description}</p>
                </div>
                <div className={`${titelClass} lg:justify-end`}>
                  <h2 className={SubTitleClass}>{information.title}</h2>
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