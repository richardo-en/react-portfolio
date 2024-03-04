import React, { useState, useEffect, useContext } from 'react';
import LanguageContext from '../additional_components/language_context';
import MobileMenuButton from '../static/images/menu.png'
import { NavLink } from 'react-router-dom';
import RineLogo from '../static/images/rinelogo.png'

const MobileNavigation = ({ links, names } ) => {
    const [selectedElement, setSelectedElement] = useState(null);
    const { language, dispatch } = useContext(LanguageContext);
    const [DisplayMenu, setDisplayMenu] = useState('hide');
    const [ActiveMenu, setActiveMenu] = useState('hidden');
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);

    const MenuOpener = () => {
        if (ActiveMenu === 'hidden') {
            setActiveMenu('block');
        } else {
            setTimeout(() => {
                setActiveMenu('hidden');
            }, 510);
        }
        setTimeout(() => {
            setDisplayMenu((prev) => (prev === 'hide' ? 'show' : 'hide'));
        }, 50);
    };

    const handleButtonClick = (input) => {
        dispatch({ type: 'TOGGLE_LANGUAGE', language: input });
        MenuOpener();
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

    useEffect(() => {
        const elements = links;

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
    }, [language, links]);

    const getButtonClass = (index) => {
        return selectedElement === index ? 'text-white' : 'text-gray-400';
    };

    return (
        <div id='mobile_navigation' className={`fixed z-50 h-20 top-0 left-0 w-full transition-transform transform ${navVisible ? 'translate-y-0' : '-translate-y-full'} bg-white flex justify-between`}>
            <NavLink to={"/"}>
                <img src={RineLogo} className='h-3/4 m-2' alt='logo Rine'/>
            </NavLink>
            <button id='mobile_menu_button' className='w-8 r-0 mx-10  z-50' onClick={MenuOpener}>
                <img src={MobileMenuButton} className='w-8' alt='mobile menu button'/>
            </button>
            <div id='mobile_menu' className={`fixed h-screen py-32 flex flex-col justify-around items-center w-full ${ActiveMenu} fade-in-out ${DisplayMenu}`}>
                {links && links.map((link, index) => (
                    <NavLink key={index} onClick={MenuOpener} to={link} spy={true} smooth={true} offset={-70} duration={800} className={`text-4xl ${getButtonClass(index)}`} id={link + `_selector`}>
                        {language === 'Slovak' ? names[index][0] : names[index][1] }
                    </NavLink>
                ))}
                <div className='text-2xl text-gray-300 flex'>
          <button className={language === 'English' ? 'underline' : ''} aria-label={`language button`} onClick={() => handleButtonClick("English")}>
            EN
          </button>
          <span className='px-3'>|</span>
          <button className={language === 'Slovak' ? 'underline' : ''} aria-label={`language button`} onClick={() => handleButtonClick("Slovak")}>
            SK
          </button>
        </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
