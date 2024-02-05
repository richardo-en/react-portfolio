import React, { useState, useEffect, useContext } from 'react';
import LanguageContext from '../additional_components/language_context';
import MobileMenuButton from '../static/images/menu.png'
import { Link } from 'react-scroll';

const MobileNavigation = ({ links, names } ) => {
    const [selectedElement, setSelectedElement] = useState(null);
    const { language, dispatch } = useContext(LanguageContext);
    const [DisplayMenu, setDisplayMenu] = useState('hide');
    const [ActiveMenu, setActiveMenu] = useState('hidden');

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

    const handleButtonClick = () => {
        setTimeout(() => {
            dispatch({ type: 'TOGGLE_LANGUAGE' });
        }, 500);
        MenuOpener();
    };

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
        <>
            <button id='mobile_menu_button' className='w-8 fixed top-2 right-2 z-50' onClick={MenuOpener}>
                <img src={MobileMenuButton} className='w-8' alt='mobile menu button'/>
            </button>
            <div id='mobile_menu' className={`fixed h-screen py-32 flex flex-col justify-around items-center w-full ${ActiveMenu} fade-in-out ${DisplayMenu}`}>
                {links && links.map((link, index) => (
                    <Link key={index} onClick={MenuOpener} to={link} spy={true} smooth={true} offset={-70} duration={800} className={`text-4xl ${getButtonClass(index)}`} id={link + `_selector`}>
                        {language === 'Slovak' ? names[index][0] : names[index][1] }
                    </Link>
                ))}
                <button className={`text-2xl underline text-gray-300`} aria-label={`language button`} onClick={handleButtonClick}>
                    {`${language === 'Slovak' ? 'Sk' : 'En'}`}
                </button>
            </div>
        </>
    );
};

export default MobileNavigation;
