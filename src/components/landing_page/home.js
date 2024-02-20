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
    <section id="home" className="fade-in-out min-h-screen max-w-screen bg-gray-white p-0 flex flex-col lg:flex-row justify-center items-end lg:items-center xl:items-end 2xl:items-center">
      <img src={Transparent} alt="personal transparent" className='z-10 w-3/4 lg:w-1/2 mx-auto left-0 top-16 sm:top-0 lg:top-40 xl:top-60 2xl:top-0 absolute'></img> 
      <div id="hero_title" className='w-screen sm:mt-24 md:mt-60 lg:mt-24'>
        <h1 >RICHARD</h1>
        <h1 className='z-50 relative'>NÉMETH</h1>
      </div>   
      {textContent.landingInformation && (
          <div className='self-center text-center text-extrawhite p-5'>
            <h2 className='px-5 relative z-10'>{textContent.landingTitle}</h2>
            <p className='p-5'>{textContent.landingInformation}</p>
          </div>
        )}
    </section>
  );
};

export default HomeSection;
