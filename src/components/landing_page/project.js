import React, { useEffect, useContext, useState, useRef } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import CObject from '../../static/images/C-objective.webp'
import CSharp from '../../static/images/C-sharp.webp'
import Python from '../../static/images/python-logo.webp'
import Descriptive from '../../static/images/descriptive.webp'
import Javascript from '../../static/images/javascript-logo.webp'
import Work from '../../static/images/work-logo.webp'

const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ projects: [] });
  const sectionRef = useRef(null);
  
  const ilustrativeImages = [Python, CSharp, CObject, Descriptive, Javascript, Work];
  
  useEffect(() => {
    setTextContent(language === 'Slovak' ? slovakText : englishText);
  }, [language]);
  
  const projectContent = [...textContent.projects];
  
  useEffect(() => {
    const transform = () => {
      const offsetTop = document.getElementById('project').offsetTop;
      const stickyEl = sectionRef.current.querySelector('.sticky_el');
      const scrollSection = stickyEl.querySelector('.scroll_section');
      const slides = scrollSection.querySelectorAll('.project_card');
      let percentage = (((window.scrollY - offsetTop - (window.innerHeight / 4)) / window.innerHeight) * 100) - 10;
      scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
      
      slides.forEach((slide, index) => {
        const imageElement = slide.querySelector('.image');
        const distanceCompare = offsetTop + (index * window.innerHeight) - (window.innerHeight / 4);
        if (window.scrollY > distanceCompare) {
          imageElement.parentElement.classList.add('visible');
        } else if (window.scrollY < distanceCompare) {
          imageElement.parentElement.classList.remove('visible');
        }
      });
    };
    
    const scrollHandler = () => {
      transform();
    };
    
    
    window.addEventListener('scroll', scrollHandler);
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  
  return (
    <section id="project" >
      <div className='sticky_parent' ref={sectionRef}>
        <div className="sticky_el">
          <div className='scroll_section'>
            {projectContent && projectContent.map((card, index) => (
              <div key={index} className={`project_card bg-gray-900 flex flex-col items-center justify-around lg:items-stretch lg:flex-row  p-0 ${index % 2 === 0 ? "card_bg_1" : "card_bg_2"}`}>
                <img src={ilustrativeImages[index]} alt={` ${ilustrativeImages[index]} logo`} className='image -ml-32' />
                <div className='w-10/12 lg:w-3/4 lg:mx-10 project_content_card p-2 lg:p-5 border-l-2 border-b-2 border-r-2 border-extrawhite mb-10 lg:mb-14 bg-white'>
                  <h1 className='text-xl sm:text-md lg:mb-10'>{card.title}</h1>
                  <p className='text-left sm:text-base '>{card.description}</p>
                </div>
                <div className='w-10/12 lg:w-1/3 flex flex-col lg:mt-40 link_card border-l-2 border-t-2 border-r-2 border-extrawhite'>
                  <h1 className='sm:text-base lg:text-md mb-5'>Links to projects</h1>
                  {card.links.map((link, linkIndex) => (
                    Object.keys(link).map((linkText) => (
                      <button key={linkIndex} className='hover:text-testcolor focus:text-testcolor focus:underline mb-2' aria-label={`button links to ${linkText}`}>
                        <a href={link[linkText]} target="_blank" rel="noopener noreferrer">
                          {linkText}
                        </a>
                      </button>
                    ))
                  ))}
                </div>
              </div>
            ))}
          </div>
          <span className='absolute right-0 flex-1 h-screen w-1/4 z-10 top-0' id='cover-right' />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
