// Navbar.js

import React, { useState, useEffect, useContext } from 'react';
import LanguageContext from './language_context';
import { NavLink } from 'react-router-dom';

const Navbar = ({ links, names }) => {
    const [selectedElement, setSelectedElement] = useState(null);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const { language, dispatch } = useContext(LanguageContext);

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

    const getButtonClass = (index) => {
        return selectedElement === index ? 'text-black' : 'text-gray-400';
    };

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-transform transform ${navVisible ? 'translate-y-0' : '-translate-y-full'} bg-white`}>
          <div className={`h-1/2 flex justify-around items-center w-full`}>
            {links && links.map((link, index) => (
              <NavLink key={index} to={link} spy={true} smooth={true} offset={-70} duration={800} className={`text-sm lg:text-xl my-5 ${getButtonClass(index)}`} id={link + `_selector`} style={{ cursor: 'pointer' }}>
                {language === 'Slovak' ? names[index][0] : names[index][1]}
              </NavLink>
            ))}
            <button className="text-md lg:text-2xl underline text-black-300" aria-label={`language button`} onClick={handleButtonClick}>
              {`${language === 'Slovak' ? 'En' : 'Sk'}`}
            </button>
          </div>
        </div>
      );
};

export default Navbar;
