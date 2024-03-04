import React, { useContext, useState, useLayoutEffect, useEffect } from 'react';
import slovakText from "../../content/slovak.json"
import englishText from "../../content/english.json"
import LanguageContext from '../../additional_components/language_context';
import Transparent from '../../static/images/Transparent_bg_for_hero.png'

const HomeSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({
    workInformation: [],
  });
  useLayoutEffect(() => {
    setTextContent(language === 'Slovak' ? slovakText : englishText);
  }, [language]);

  const FirstName = ["R", "I", "C", "H", "A", "R", "D"];
  const SecondName = ["N", "É","M","E","T","H"];

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

    const section = document.getElementById('home');
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
    <section id="home" className="fade-in-out min-h-screen max-w-screen bg-gray-white p-0 flex flex-col lg:flex-row justify-center items-end lg:items-center xl:items-end 2xl:items-center mt-20">
      <img src={Transparent} alt="personal transparent" className='z-10 w-3/4 lg:w-1/2 mx-auto left-0 top-16 sm:top-0 lg:top-40 xl:top-60 2xl:top-0 absolute'></img>
      <div id="hero_title" className='w-screen sm:mt-24 md:mt-0 lg:mt-24'>
        <div id='first_word' className='flex wave'>
          {FirstName.map((element, index) => (
            <h1 key={index} style={{"--i" : index + 1}}>{element}</h1>
          ))}
        </div>
        <div id='second_word' className='flex wave'>
          {SecondName.map((element, index) => (
            <h1 key={index} className='z-50 relative' style={{"--i" : index + FirstName.length + 1}}>{element}</h1>
          ))}
        </div>
      </div>
      {textContent.landingInformation && (
        <div id='introduction_text' className='self-center text-center text-extrawhite p-5 2xl:p-28 2xl:mx-10 2xl:justify-self-end'>
          <p className='p-5'>{textContent.landingInformation}</p>
        </div>
      )}
    </section>
  );
};

export default HomeSection;
