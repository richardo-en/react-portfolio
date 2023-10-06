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
        <div className="text-center grid grid-cols-2">
            <div className="flex flex-col bg-gray-900 p-5 h-64 flex flex-col justify-center">
                <h1 className='text-3xl '>{textContent.freelance_contact}</h1>
                <p className='text-center'>{textContent.freelance_contact_content}</p>
            </div>
            <div className='h-full w-full bg-extrawhite text-black text-4xl flex items-center'>
              <h1 className='m-auto'>richard3.nemeth@gmail.com</h1>
            </div>
        </div>
        {/* <div className=" text-center grid grid-cols-2 h-64">
            <span className='h-full w-full bg-extrawhite'/>
            <h1 className='text-4xl bg-gray-900 h-full'>richard3.nemeth@gmail.com</h1>
        </div> */}
          <Footer />
    </section>
  );
};

export default FreelanceContact;
