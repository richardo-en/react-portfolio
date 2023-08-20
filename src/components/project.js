import React, { useEffect, useContext, useState, useRef } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';
import CObject from '../static/images/C-objective.png'
import CSharp from '../static/images/C-sharp.png'
import Python from '../static/images/python-logo.png'
import Descriptive from '../static/images/descriptive.png'

const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ projects: [] });
  const sectionRef = useRef(null);
  
  const ilustrativeImages = [Python, CSharp, CObject, Descriptive];
  
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
            {projectContent.map((card, index) => (
              <div key={index} className={`project_card bg-gray-900 flex p-0 ${index % 2 === 0 ? "card_bg_1" : "card_bg_2"}`}>
                <img src={ilustrativeImages[index]} className='image -ml-32' />
                <div className='w-1/2 mx-20 project_content_card p-10 border-l-2 border-b-2 border-r-2 border-extrawhite mb-40 bg-white'>
                  <h1 className='text-xl mb-10'>{card.title}</h1>
                  <p className='text-left'>{card.description}</p>
                </div>
                <div className='w-1/4 flex flex-col mt-40 justify-around link_card border-l-2 border-t-2 border-r-2 border-extrawhite'>
                  <h1 className='text-xl'>Links to projects</h1>
                    <button className='hover:text-testcolor focus:text-testcolor focus:underline' ><a>project-1</a></button>
                    <button className='hover:text-testcolor focus:text-testcolor focus:underline' ><a>project-2</a></button>
                    <button className='hover:text-testcolor focus:text-testcolor focus:underline' ><a>project-3</a></button>
                    <button className='hover:text-testcolor focus:text-testcolor focus:underline' ><a>project-4</a></button>
                    <button className='hover:text-testcolor focus:text-testcolor focus:underline' ><a>project-5</a></button>
                    <button className='hover:text-testcolor focus:text-testcolor focus:underline' ><a>project-6</a></button>
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
