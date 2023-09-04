import React, { useState, useEffect, useContext, useLayoutEffect, useMemo } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';

export function calculateWebsiteHeight() {
    const body = document.body;
    const html = document.documentElement;
  
    // Calculate the maximum height considering different browser inconsistencies
    const height = Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
    return height;
}

function setNavigationTop(links, websiteHeight) {
        for (let i = 0; i < links.length; i++) {
            const element = links[i];
            const navigationSelector = document.getElementById(element + "_selector");
            if (navigationSelector) {
                const mainElement = document.getElementById(element);
                const offset = mainElement.offsetTop + (mainElement.clientHeight/2)
                const percentage = (offset / websiteHeight);
                // console.log(offset);
            navigationSelector.style.top = `${percentage * (window.innerHeight*0.6)}px`;
        }
  }
}


const NavigationSelector = () => {
    const [selectedElement, setSelectedElement] = useState(null);
    const { language } = useContext(LanguageContext);
    const links = useMemo(() => ["home", "about", "project", "future", "contact"], []);

      
    
      useLayoutEffect(() => {
        const websiteHeight = calculateWebsiteHeight();
        setNavigationTop(links, websiteHeight);
      }, [links]);

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
                <a key={index} href={`http://localhost:3000#${links[index]}`} className={`p-3 md:p-4 border-2 border-testcolor text-center rounded-md text-white hover:bg-gray-700 text-xs absolute md:text-xs lg:text-base w-36 lg:w-40 left-5 ${getButtonClass(index)}`} id={links[index] + `_selector`}><button aria-label={`${item.title} button`}>{item.title}</button></a>
            ))}
        </>
    );
};

export default NavigationSelector;
