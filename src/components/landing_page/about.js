import React, { useLayoutEffect, useContext, useState } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import Ilustration from '../../static/images/personal_image_intro_min.jpg'


const AboutSection = React.forwardRef((props, ref) => {
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
  const margin_left_value = window.innerWidth <= 768 ? (window.innerWidth / 0) : window.innerWidth / 8

  return (
    <section id="about" ref={ref} className="fade-in-out bg-gray-800 flex flex-col items-center mt-32 lg:mb-72 lg:px-5 md:px-28 px-0">
      <div className='xl:w-3/4 h-1/2 flex flex-col lg:flex-row justify-around text-center items-center mt-60 border-b-2 border-testcolor' style={{ marginLeft: margin_left_value }}>

        <img src={Ilustration} alt="Illustration" className='w-full mb-5 lg:w-1/2 rounded-lg -mt-40 relative z-40' id='contact_image'/>
        {textContent.landingInformation && (
          <div className='max-w-3xl lg:w-1/2 text-extrawhite py-5'>
            <h2 className='text-4xl lg:text-6xl font-gloock px-5 relative z-10 title_text'>{textContent.landingTitle}</h2>
            <p className='text-md lg:text-xl p-5 font-Inconsolata'>{textContent.landingInformation}</p>
          </div>
        )}
      </div>
    </section>
  );
});
export default AboutSection