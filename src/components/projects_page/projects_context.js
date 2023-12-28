import React, { useEffect, useState, useContext } from 'react'
import slovakText from '../../content/slovak.json'
import englishText from '../../content/english.json'
import LanguageContext from '../../additional_components/language_context';
import CLogo from '../../static/images/C_logo.png'
import PythonLogo from '../../static/images/python.png'
import JsLogo from '../../static/images/js.png'
import CshaprLogo from '../../static/images/game.png'


const ProjectContext = () => {
    var element_index = 0;
    const { language } = useContext(LanguageContext);
    const [textContent, setTextContent] = useState({ contact: [] });
    const background_colors = ["#EDE7DC", "#DCD2CC", "#CCAFA5", "#BDC3CB"]
    const background_image_colors = ["rgb(31, 41, 55,1)", "rgb(42, 111, 64,1)", "rgb(127, 84, 48,1)", "rgb(31, 41, 55,1)"]
    const logos = [CLogo, PythonLogo, JsLogo, CshaprLogo]
    const element_ids = ["university", "sub_university", "python","sub_python", "flask", "django", "jscript","sub_jscript", "react", "mern", "csharp", "sub_csharp"]
    const [isVisibleArray, setIsVisibleArray] = useState(Array(element_ids.length).fill(false));

    useEffect(() => {
        const content = language === 'Slovak' ? slovakText : englishText;
        setTextContent(content)
    }, [language]);


    useEffect(() => {
        const handleScroll = () => {
            const updatedVisibilityArray = isVisibleArray.map((_, el_index) => {
                const element = document.getElementById(`${element_ids[el_index]}`);
                return element ? window.scrollY + window.innerHeight + element.clientHeight > element.offsetTop : false;
            });
            setIsVisibleArray(updatedVisibilityArray);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisibleArray]);




    return (
        <section id="project_context" className='bg-white'>
            <div className='flex flex-col mt-20'>
                {textContent.projects && textContent.projects.map((project, index) => (
                    <>
                        {/*Main title with picture*/}
                        <div id={element_ids[element_index++]} className={`fade-in-out ${isVisibleArray[element_index] ? 'show' : 'hide'}`}>
                            <div className='w-full mt-20' style={{ background: `${isVisibleArray[element_index] ? `linear-gradient(180deg, rgba(255,255,255,1) 0%, ${background_image_colors[index]} 100%)` : `bg-gray-800`}` }}>
                                <img src={logos[index]} className='w-full' />
                            </div>
                            <h1 className='text-5xl mb-0 font-bold px-5 text-extrawhite' style={{ backgroundColor: `${background_image_colors[index]}` }}>0{(index + 1) + " " + project.title}</h1>
                        </div>
                        {project.sub_projects && project.sub_projects.map((specific_project, sub_index) => (
                            <>
                                {/*Paragraphs with information*/}
                                <div  className={`mb-10 px-4 text-center ${sub_index !== 0 ? `w-11/12 mt-36 ${sub_index % 2 == 0 ? `self-end rounded-l-xl slide_right` : `rounded-r-xl slide_left`}` : `w-full rounded-b-xl fade-in-out`} ${isVisibleArray[element_index] ? 'show' : 'hide'}`} style={{ backgroundColor: `${background_image_colors[index]}` } } id={element_ids[element_index++]}>
                                    <h1 className={` ${sub_index == 0 ? `pt-20` : `pt-5`}  text-xl text-white`}>{specific_project.title}</h1>
                                    <p className='p-5 text-gray-200'>{specific_project.context}</p>
                                </div>
                                {/*Technologies with my note*/}
                                <div className='px-2'>
                                    {/*Technology part*/}
                                    <div className={`${specific_project.tech.length != 0 ? `block` : `hidden`}`}>
                                        <h2 className='text-2xl'>{specific_project.tech && specific_project.tech.length != 0 && "Pouzite technologie v projekte"}</h2>
                                        <div className='grid grid-cols-2'>
                                            {specific_project.tech.map((element, techIndex) => (
                                                <div key={techIndex} className='mx-2 mb-6 text-lg font-bold text-center py-2 rounded-full' style={{ backgroundColor: `${background_colors[techIndex % 3]}` }}>
                                                    <h1>{element}</h1>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/*Note part*/}
                                    <div className={`${specific_project.note != "" ? `block` : `hidden`}`}>
                                        <h2 className='text-2xl mt-10'>{specific_project.note && specific_project.note != "" && "Moja poznamka"}</h2>
                                        <p>{specific_project.note}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                ))}
            </div >
        </section>
    );
};

export default ProjectContext;
