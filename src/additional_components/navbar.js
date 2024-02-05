// Navbar.js

import React, { useState, useEffect, useContext, useMemo } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from './language_context';
import { Link } from 'react-scroll';

const Navbar = ({ links, names }) => {
    const [selectedElement, setSelectedElement] = useState(null);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const { language, dispatch } = useContext(LanguageContext);
    const [Rotation, setRotation] = useState('');

    const handleButtonClick = () => {
        setTimeout(function () {
            dispatch({ type: 'TOGGLE_LANGUAGE' });
        }, 500);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            for (let i = 0; i < links.length; i++) {
                let section = document.getElementById(links[i]);
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setSelectedElement(i);
                }
            }

            if (scrollPosition > lastScrollPos) {
                setNavVisible(false);
            } else {
                setNavVisible(true);
            }
            setLastScrollPos(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [language, lastScrollPos, links]);

    const navigationData = language === 'Slovak' ? slovakText : englishText;
    const getButtonClass = (index) => {
        return selectedElement === index ? 'text-black' : 'text-gray-400';
    };

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-transform transform ${navVisible ? 'translate-y-0' : '-translate-y-full'} bg-white`}>
            <div className={`h-1/2 flex justify-around items-center w-full`}>
                {links && links.map((link, index) => (
                    <Link key={index} to={link} spy={true} smooth={true} offset={-70} duration={800} className={`text-sm lg:text-xl my-5 ${getButtonClass(index)}`} id={link + `_selector`}>
                        {language === 'Slovak' ? names[index][0] : names[index][1] }</Link>
                ))}
                <button className="text-md lg:text-2xl underline text-black-300" aria-label={`language button`} onClick={handleButtonClick}>
                    {`${language === 'Slovak' ? 'Sk' : 'En'}`}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
