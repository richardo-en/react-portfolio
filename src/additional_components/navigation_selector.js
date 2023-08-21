import React, { useState, useEffect, useContext } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';

const NavigationSelector = () => {
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
        return selectedElement === index ? 'bg-gray-700' : 'bg-gray-800';
    };

    return (
        <>
            {navigationData.navigation.map((item, index) => (
                <a key={index} href={`http://localhost:3000#${links[index]}`} className={`p-3 md:p-4 border-2 border-testcolor text-center rounded-md text-white hover:bg-gray-700 text-xs ${getButtonClass(index)}`}><button>{item.title}</button></a>
            ))}
        </>
    );
};

export default NavigationSelector;
