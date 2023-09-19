import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import Footer from '../../additional_components/footer';

const FreelanceContact = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ contact: [] });

  useEffect(() => {
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content)
  }, [language]);

  return (
    <section id="freelance_contact" className="h-screen w-screen relative bg-gray-700 flex flex-col justify-center items-center text-white">
        <div className="w-screen text-center grid gap-4 grid-cols-2 mb-40">
            <div className="flex flex-col p-5">
                <h1 className='text-3xl '>{textContent.freelance_contact}</h1>
                <p className='text-left'>{textContent.freelance_contact_content}</p>
            </div>
            <span className='h-full w-full bg-gray-600'/>
        </div>
        <div className="w-screen text-center grid gap-4 grid-cols-2 mb-40">
            <span className='h-full w-full bg-gray-600'/>
            <h1 className='text-4xl'>richard3.nemeth@gmail.com</h1>
        </div>
        <Footer />
    </section>
  );
};

export default FreelanceContact;
