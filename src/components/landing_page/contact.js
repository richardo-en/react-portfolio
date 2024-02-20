import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import Ilustration from '../../static/images/stand_position_me_min.jpg'
import LanguageContext from '../../additional_components/language_context';
// import Footer from '../../additional_components/footer';
// import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactSection = React.forwardRef((props, ref) => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });
  const [ClassShow, setClassShow] = useState("");

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            // entry.target.classList.add('show'); 
            setClassShow("show")
          }
        });
      },
      { threshold: 0.5 }
    );

    const contextElements = document.querySelectorAll('.context_contact');
    if (contextElements){
      contextElements.forEach((contextElement) => {
      observer.observe(contextElement);
      });
    }

    return () => {
      contextElements.forEach((contextElement) => {
        observer.unobserve(contextElement);
      });
    };
  }, []);

  return (
    <section id="contact" ref={ref} className={`context_contact fade-in-out ${ClassShow} min-h-screen bg-gray-800 flex flex-col items-center xl:grid xl:grid-cols-3 px-3 py-5 xl:px-20 xl:py-20 mt-20 overflow-x-hidden`}>
      <div className='flex flex-col lg:self-center mb-10 xl:col-span-2'>
        <div className='w-4/5 mx-auto lg:w-full relative z-10 mb-5 text-center'>
          <h2 className='px-5 text-extrawhite'>{textContent.contact_titel}</h2>
        </div>
        <p className='self-start text-extrawhite text-center lg:w-1/2 lg:self-center xl:w-full xl:self-start'>{textContent.contact_description}</p>
      </div>
      <div className='lg:self-center mx-10 mb-10'>
        <img src={Ilustration} alt="Me with black background" className='w-full m-auto sm:w-3/4 md:w-1/2 xl:w-full rounded-2xl h-full' id='contact_image' />
      </div>
    </section>
  );
});

export default ContactSection;
