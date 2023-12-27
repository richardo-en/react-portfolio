import React, { useEffect, useContext, useState, useRef, useLayoutEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import CObject from '../../static/images/C-objective.webp'
import CSharp from '../../static/images/C-sharp.webp'
import Python from '../../static/images/python-logo.webp'
import Descriptive from '../../static/images/descriptive.webp'
import Javascript from '../../static/images/javascript-logo.webp'
import Work from '../../static/images/work-logo.webp'
import testimg from '../../static/images/letter_a.webp'
import C1 from '../../static/images/c_1.png'
import C2 from '../../static/images/c_2.png'
import jsGame1 from '../../static/images/js_game_1.png'
import jsGame2 from '../../static/images/js_game_2.png'
import Mb1 from '../../static/images/mark_ball_1.webp'
import Mb2 from '../../static/images/mark_ball_2.png'

const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ projects: [] });
  const sectionRef = useRef(null);

  const titleImages = [Python, CSharp, CObject, Descriptive, Javascript, Work];
  const ilustrativeImages = [[testimg, testimg], [Mb1, Mb2], [C1, C2], [testimg, testimg], [jsGame1, jsGame2], [testimg, testimg]];
  const ilustrativeText = ["Python OOP Flask Django Odoo", "C# Unity Blender Google Play", "C Allocation Linked List", "Html Css Bootstrap Tailwind", "Javascript Express js React", "Work experience Freelance jobs"];


  useLayoutEffect(() => {
    const titleContainer = document.getElementById("main_title_project");
    
    const createImageElement = (src, alt) => {
      const imageElement = document.createElement("img");
      imageElement.src = src;
      imageElement.alt = alt;
      imageElement.className = "mx-2 h-14";
      return imageElement;
    };

    const Headline = () => {
      titleContainer.innerHTML = '';

      for (let i = 0; i < ilustrativeText.length; i++) {
        for (let a = 0; a < 3; a++) {
          const text = ilustrativeText[i];
          const imageSrc = titleImages[i];
          const altText = `${text} logo`;
          
          titleContainer.appendChild(document.createTextNode(text));
          titleContainer.appendChild(createImageElement(imageSrc, altText));
        }
      }
    };

    window.addEventListener("resize", Headline);

    Headline();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", Headline);
    };
  }, []);

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
      document.getElementById("main_title_project").style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
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
          <h1 id="main_title_project" className='text-lg lg:text-6xl font-gloock px-5 relative z-10 bg-white repeating-sentence flex flex-row'></h1>
          <div className='scroll_section'>
            {projectContent && projectContent.map((card, index) => (
              <div key={index} className={`project_card bg-white grid grid-flow-col grid-cols-3 grid-rows-4 gap-4 p-0 relative ${index % 2 === 0 ? "card_bg_1" : "card_bg_2"}`}>
                {/* <img src={titleImages[index]} alt={` ${titleImages[index]} logo`} className='image -ml-32' /> */}
                <h1 className='text-lg lg:text-6xl font-gloock px-5 relative z-10 title_text text-black moved right-40  col-span-2'>{card.title}</h1>
                <p className='text-left sm:text-base row-start-2 col-span-2 px-5'>{card.description}</p>
                <p className='text-left sm:text-base row-start-3 col-span-3 px-5 mt-10 bg-white relative z-10 h-full'>{card.description}</p>
                <img src={ilustrativeImages[index][0]} className='row-start-1 col-start-3 absolute right-14 top-14' />
                <img src={ilustrativeImages[index][1]} className='row-start-2 col-start-3 absolute right-28 top-20' />
                <div className='text-white row-start-4 col-span-3 w-full flex justify-around items-end'>
                  {card.links.map((link, linkIndex) => (
                    Object.keys(link).map((linkText) => (
                      <button key={linkIndex} className='hover:text-testcolor focus:text-testcolor focus:underline w-full link_button h-2/5' aria-label={`button links to ${linkText}`}>
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
