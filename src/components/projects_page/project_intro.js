import React, { useEffect, useState, useContext } from 'react'
import slovakText from '../../content/slovak.json'
import englishText from '../../content/english.json'
import LanguageContext from '../../additional_components/language_context';
import { Link } from 'react-scroll';

//LOGOS IMPORT
  import html from "../../static/images/html5.png"
  import css from "../../static/images/CSS3.png"
  import xml from "../../static/images/xml.png"
  import bootstrap from "../../static/images/Bootstrap.png"
  import tailwind from "../../static/images/tailwind.png"

  import python from "../../static/images/python_logo.png"
  import c from "../../static/images/c_.png"
  import javaScript from "../../static/images/javascript_logo.png"
  import bash from "../../static/images/Bash.png"

  import flask from "../../static/images/flask.png"
  import dajngo from "../../static/images/dajngo.png"
  import react from "../../static/images/react.png"

const ProjectIntro = () => {
  const links = ["university", "python", "javascript", "csharp"]
  const names = [["Univerzita", "University"], ["Python", "Python"], ["Javascript", "Javascript"], ["Mobilná hra C#", "Mobile game C#"]];
  const programmingLogos = [[c, bash, python, javaScript, flask, dajngo], [react, html, css, xml, bootstrap, tailwind]]


  //Context mapping
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="projects_home">
      <div className='project_headline relative overflow-hidden flex flex-col justify-center'>
        <div className='w-full'>
          <span id='project_image' className='absolute inset-0' style={{ opacity: 0.2 }} />
        </div>
        {textContent.project_intro && textContent.project_intro.map((project, index) => (
          <h1 className='text-left text-extrawhite xl:text-6xl xl:p-32 xl:mt-20'>{project.title}</h1>
        ))
        }
      </div>
      <div className='w-screen bg-white flex flex-col items-center xl:p-20'>
        {textContent.project_intro && textContent.project_intro.map((project, index) => (
          <p className='text-xl p-10 stext-center xl:w-1/2 xl:m-auto mt-20'>{project.context}</p>
        ))}
        <div className='lg:flex lg:items-center lg:justify-around mt-20 grid grid-cols-2'>
          {links.map((link, index) => (
            <div className='flex flex-col text-center xl:text-6xl'>
              <h1 className='text-3xl'>0{index+1}</h1>
              <Link to={link} spy={true} smooth={true} offset={-70} duration={800} className='xl:text-xl border-2 border-black xl:m-10 m-2 p-5'>{LanguageContext === 'Slovak' ? names[index][1] : names[index][0]}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray-800'>
        {programmingLogos && programmingLogos.map((logos, index) => (
          <div className='w-full p-5 my-4 md:w-1/2 xl:w-1/3 xl:my-10 flex justify-around mx-auto'>
            {logos.map((logo) => (
              <img src={logo} className='xl:h-10 h-8'/>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectIntro;
