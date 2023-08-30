import React, { useState, useEffect, useContext } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';

const MobileNavigationSelector = () => {
    const [selectedElement, setSelectedElement] = useState(null);
    const { language } = useContext(LanguageContext);
    const links = ["home", "about", "project", "future", "contact"];

    useEffect(() => {
        const elements = ["home", "about", "project", "future", "contact"];

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            for (let i = 0; i < elements.length; i++) {
                let section = document.getElementById(elements[i]);
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setSelectedElement(i);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [language]);

    
    
    
    const navigationData = language === 'Slovak' ? slovakText : englishText;
    
    const getButtonClass = (index) => {
        return selectedElement === index ? 'text-white' : 'text-gray-400';
    };
    
    return (
        <>
            <div className={`fixed h-1/2 top-1/4 flex flex-col justify-around items-center w-full`}>
                {navigationData.navigation.map((item, index) => (
                    <a key={index} href={`http://localhost:3000#${links[index]}`} className={`text-4xl ${getButtonClass(index)}`} id={links[index] + `_selector`}><button>{item.title}</button></a>
                ))}
            </div>
        </>
    );
};

export default MobileNavigationSelector;
