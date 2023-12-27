import React, { useEffect, useState, useContext } from 'react'
import slovakText from '../../content/slovak.json'
import englishText from '../../content/english.json'
import LanguageContext from '../../additional_components/language_context';
import ProjectImage from '../../static/images/projects.jpg'

const ProjectIntro = () => {
  //global classes
  const button_design = "p-2 flex justify-between";
  const plus_sign = "text-2xl";
  const animatedDivClass = "transition-all duration-500 ease-in-out";


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

  return (
    <section id="projects">
      <div id="project_image" />
      <div className='mb-20 relative z-40'>
        {textContent.project_intro && textContent.project_intro.map((project, index) => (
          <>
            <h1 className='text-2xl text-center text-extrawhite mt-20'>{project.title}</h1>
            <p className='text-xl text-center text-extrawhite mt-20'>{project.context}</p>
          </>
        ))
        }
      </div>
      <div className='flex flex-col bg-white text-left text-center text-xl leading-10 divide-y divide-black p-2 mt-60'>
        {textContent.projects && textContent.projects.map((project, index) => (
          <>
            <button key={index} className={button_design} onClick={() => handleButtonClick(index)}>
              <h1>{project.title}</h1><h1 className={plus_sign}>{isDivVisible(index) ? "-" : "+"}</h1></button>
            <div className={`flex flex-col animated_div ${isDivVisible(index) ? 'active' : ''}`}>
              {isDivVisible(index) && project.sub_projects && project.sub_projects.map((specific_project, sub_index) => (
                <>
                  <button key={sub_index}><h1>{specific_project.title}</h1></button>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ProjectIntro;
