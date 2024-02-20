import React, { useEffect, useState, useContext, useRef } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import STU from "../../static/images/stu_black.jpg";
import python from "../../static/images/python_project.png";
import javascript from "../../static/images/js.jpg";
import mobDev from "../../static/images/game.png";

const ProjectContext = () => {
    const { language } = useContext(LanguageContext);
    const [textContent, setTextContent] = useState({ contact: [] });
    const links = ["university", "python", "javascript", "csharp"];
    const colors = ["bg-gray-800 text-extrawhite", "bg-gray-200 text-black", "bg-gray-700 text-extrawhite", "bg-gray-200 text-black"];
    const images = [STU, python, javascript, mobDev];
    const windowWidth = window.screen.width;

    const observer = useRef(null);

    useEffect(() => {
        const content = language === 'Slovak' ? slovakText : englishText;
        setTextContent(content);
    }, [language]);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains('show')) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.5 });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const observeElement = (element) => {
        if (element && observer.current) {
            observer.current.observe(element);
        }
    };

    return (
        <section id="project_context" className='bg-white text-extrawhite'>
            <div className={`flex flex-col p-4 sm:p-10`}>
                {textContent.projects && textContent.projects.map((project, index) => (
                    <div key={index} ref={(element) => observeElement(element)} className={`context_project ${index % 2 === 0 ? "slide_right" : "slide_left"} w-full text-center flex flex-col md:items-center md:justify-center md:flex-row my-32 ${colors[index]}`} id={links[index]}>
                        <div className={`backgraround_project_images md:w-1/2 text-center p-10 relative z-20 h-96 ${windowWidth >= 768 ? (index % 2 === 0 ? 'order-last' : '') : ''}`} style={{backgroundImage : `url(${images[index]})`}}>
                            <h2 className='relative z-10 font-medium'>#0{index + 1 + "  "}</h2>
                            <h2 className='mb-8 relative z-10 font-medium'>{project.title}</h2>
                        </div>
                        <p className='mb-5 p-5 xl:text-xl xl:p-28 md:w-1/2'>{project.context}</p>
                    </div>
                ))}
            </div>
            <div id='overview' className='w-full p-5 bg-gray-800 text-extrawhite my-0 xl:mb-32'>
                <h2 className='mb-5 text-3xl lg:text-6xl relative z-10 font-gloock  xl:w-1/2 xl:m-auto xl:mb-20'>{textContent.projects_outro_title ? textContent.projects_outro_title : ""}</h2>
                <p className=' xl:w-1/2 xl:m-auto xl:text-xl'>{textContent.projects_outro_context ? textContent.projects_outro_context : ""}</p>
            </div>
        </section>
    );
};

export default ProjectContext;