import React, { useEffect, useState, useContext } from 'react'
import slovakText from '../../content/slovak.json'
import englishText from '../../content/english.json'
import LanguageContext from '../../additional_components/language_context';

const ProjectIntro = () => {
  //global classes
  const button_design = "p-2 flex justify-between";
  const plus_sign = "text-2xl";
  const element_ids = [["university", "sub_university"], ["python", "flask", "django"], ["jscript", "react", "mern"], ["csharp", "sub_csharp"]]

  //Context mapping
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  //Button handeling
  const [activeIndex, setActiveIndex] = useState(null);

  
  const handleButtonClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const isDivVisible = (index) => {
    return activeIndex === index;
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  const handleRedirection = (index, subIndex) => {

    const targetElement = document.getElementById(element_ids[index][subIndex])
    const heightAdjustment = subIndex !== 0 ? targetElement.clientHeight : 0
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - heightAdjustment,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects">
      <div id="project_image"/>
      <div className='relative z-40'>
        {textContent.project_intro && textContent.project_intro.map((project, index) => (
          <div>
            <h1 className='text-2xl text-center text-extrawhite mt-20'>{project.title}</h1>
            <p className='text-xl text-center text-extrawhite mt-20'>{project.context}</p>
          </div>
        ))
        }
      </div>
      <div className='w-screen mt-32 sm:w-3/4 sm:mx-auto sm:mt-80 '>


      <div className='flex flex-col bg-white text-left text-center text-xl leading-10 divide-y divide-black p-2'>
        {textContent.projects && textContent.projects.map((project, index) => (
          <>
            <button key={index} className={button_design} onClick={() => handleButtonClick(index)}>
              <h1>{project.title}</h1><h1 className={plus_sign}>{isDivVisible(index) ? "-" : "+"}</h1></button>
            <div className={`flex flex-col animated_div ${isDivVisible(index) ? 'active' : ''}`}>
              {isDivVisible(index) && project.sub_projects && project.sub_projects.map((specific_project, sub_index) => (
                <>
                  <button key={sub_index} onClick={() => handleRedirection(index, sub_index)}><h1>{specific_project.title}</h1></button>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
        </div>
    </section>
  );
};

export default ProjectIntro;
