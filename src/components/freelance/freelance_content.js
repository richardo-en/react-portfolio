import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';

const FreelanceContent = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });
  useEffect(() => {

    const titleRotation = () => {
      const sectionOffset = document.getElementById("freelance_content").offsetTop;
      var percentage = window.scrollY / sectionOffset;
      const titles = document.querySelectorAll(".freelance_content_title")
      for (let i = 0; i < titles.length; i++) {        
        if (percentage - (i * 0.5) <= 1.1) {
          titles[i].style.scale = percentage - (i * 0.5)
        }
      }    
    }

    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)

    window.addEventListener('scroll', titleRotation);

    return () => {
      window.removeEventListener('scroll', titleRotation);
    };
  }, [language]);

  return (
    <section id="freelance_content" className="h-1/2 bg-gray-700 w-screen py-20 text-white my-10 overflow-x-hidden	">
      {textContent.freelance_content &&
        textContent.freelance_content.map((content, index) => (
          <div className="flex items-center bg-gray-900 mb-20" key={index}>
            <div className="w-2/5 h-full bg-testcolor flex justify-center">
              <h1 className='text-4xl underline freelance_content_title my-40' >{content.title}</h1>
            </div>
            <p className='w-1/2 p-5'>{content.context}</p>
          </div>
        ))}
    </section>
  );
};

export default FreelanceContent;
