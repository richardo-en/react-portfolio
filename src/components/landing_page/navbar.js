// import React, { useState, useContext } from 'react';
// import NavigationSelector from '../../additional_components/navigation_selector';
// import SliderDot from '../../additional_components/slider';
// import '../../static/effects.css';
// import LanguageContext from '../../additional_components/language_context';
// import MobileNavigationSelector from '../../additional_components/mobile_navigation';
// import MobileIcon from '../../static/images/mobile_menu.webp'

// const Navbar = () => {
//   const { language, dispatch } = useContext(LanguageContext);
//   const [TextColor, setTextColor] = useState('#c7eaff');
//   const [Rotation, setRotation] = useState('');

//   const handleButtonClick = () => {
//     setRotation('rotated');

//     setTimeout(function () {
//       setTextColor('rgba(75, 85, 99)');
//       dispatch({ type: 'TOGGLE_LANGUAGE' });
//     }, 500);

//     setTimeout(function () {
//       setTextColor('#c7eaff');
//       setRotation('');
//     }, 1000);
//   };

//   return (
//     <nav>
//       <div className='hidden md:flex fixed h-screen flex-col justify-center sm:w-1/3 items-center z-40'>
//         <SliderDot />
//         <div className="sticky h-3/5 z-40 w-1/2 text-center">
//           <NavigationSelector />
//         </div>
//         <span className="bg-gray-600 w-2 h-3/5 fixed rounded-lg" />
//         <SliderDot />
//         <button className={`fixed bottom-20 bg-gray-600 py-2 px-3 rounded-md border-2 border-white hover:scale-110 ${Rotation} `} aria-label={`language button`} onClick={handleButtonClick} style={{ color: TextColor }}>
//           {language}
//         </button>
//       </div>
//       <div className='md:hidden'>
//         <button className='fixed top-5 right-5 z-50 w-10 h-10' onClick={SwitchClasses} id='mobile_button_switch' aria-label='Mobile menu button' ><img className='z-60' src={MobileIcon} alt="Mobile navigation button" /></button>
//         <div className={`bg-gray-800 z-40 fixed w-full h-full hidden`} id='mobile_menu_expand'>
//           <MobileNavigationSelector />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar


import React, { useState, useEffect, useContext } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
import { SwitchClasses } from '../../components/landing_page/navbar.js';

const Navbar = () => {
    const [selectedElement, setSelectedElement] = useState(null);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const { language, dispatch } = useContext(LanguageContext);
    const links = ["home", "about", "project", "future", "contact"];
    const [Rotation, setRotation] = useState('');

    function SwitchClasses(){
      const mobileMenu = document.getElementById("mobile_menu_expand")
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
        mobileMenu.classList.add("display_menu")
      }else{
        mobileMenu.classList.remove("display_menu")
        mobileMenu.classList.add("hide_menu")
        setTimeout(() => {
          mobileMenu.classList.remove("hide_menu")
          mobileMenu.classList.add("hidden")
        }, 500);
      }
    }

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

    const handleButtonClick = () => {
        setRotation('rotated');
        setTimeout(function () {
            dispatch({ type: 'TOGGLE_LANGUAGE' });
        }, 500);
        setTimeout(function () {
            setRotation('');
        }, 1000);
    };

    const navigationData = language === 'Slovak' ? slovakText : englishText;
    const getButtonClass = (index) => {
        return selectedElement === index ? 'text-white' : 'text-gray-400';};

    return (
        <div className={`fixed top-0 left-0 w-full transition-transform transform ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className={`h-1/2 flex justify-around items-center w-full`}>
                {navigationData.navigation.map((item, index) => (
                    <a key={index} href={`/#${links[index]}`} className={`text-4xl ${getButtonClass(index)}`} id={links[index] + `_selector`}><button aria-label={`${item.title} button`} onClick={SwitchClasses} >{item.title}</button></a>
                ))}
                <button className={`${Rotation} text-2xl underline text-gray-300`} aria-label={`language button`} onClick={handleButtonClick}>
                    {language}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
