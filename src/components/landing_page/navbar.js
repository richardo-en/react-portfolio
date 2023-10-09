import React, { useState, useEffect, useContext } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [selectedElement, setSelectedElement] = useState(null);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const { language, dispatch } = useContext(LanguageContext);
    const links = ["home", "about", "work_experience", "interest", "contact"];
    const [Rotation, setRotation] = useState('');

    const handleButtonClick = () => {
        setRotation('rotated');
        setTimeout(function () {
            dispatch({ type: 'TOGGLE_LANGUAGE' });
        }, 500);
        setTimeout(function () {
            setRotation('');
        }, 1000);
    };

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth', // Add smooth scrolling behavior
                block: 'start', // Scroll to the start of the section
            });
        }
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
    }, [language, lastScrollPos]);

    const navigationData = language === 'Slovak' ? slovakText : englishText;
    const getButtonClass = (index) => {
        return selectedElement === index ? 'text-black' : 'text-gray-400';
    };

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-transform transform ${navVisible ? 'translate-y-0' : '-translate-y-full'} bg-white`}>
            <div className={`h-1/2 flex justify-around items-center w-full`}>
                {navigationData.navigation.map((item, index) => (
                    <Link
                        key={index}
                        to={links[index]}
                        spy={true}
                        smooth={true}
                        offset={-70} // You might need to adjust this offset value based on your layout
                        duration={800} // Duration of the scroll animation
                        className={`text-sm lg:text-2xl my-5 ${getButtonClass(index)}`}
                        id={links[index] + `_selector`}
                    >
                        {item.title}
                    </Link>
                ))}
                <button className={`${Rotation} text-md lg:text-2xl underline text-black-300`} aria-label={`language button`} onClick={handleButtonClick}>
                    {language}
                </button>
            </div>
        </div>
    );

};

export default Navbar;
