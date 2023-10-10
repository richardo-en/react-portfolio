import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from './language_context';

const Footer = () => {

    const { language } = useContext(LanguageContext);
    const [textContent, setTextContent] = useState({ contact: [] });
  
    useEffect(() => {
      const content = language === 'Slovak' ? slovakText : englishText;
      setTextContent(content)
    }, [language]);

    return (

        
        <div className="w-full relative bottom-0 z-50 flex justify-center col-span-3 col-start-1">
            <div className="absolute w-4/6 bg-gray-600 flex justify-around text-white text-xl text-center p-0">
            {textContent.footer && textContent.footer.map((link, index) => (
                <a key={index} href={`${link.redirect}`} className="p-6 w-full bg-gray-800 hover:bg-gray-700" >{link.title}</a>
            ))}
            </div>
        </div>
    )
};

export default Footer;
