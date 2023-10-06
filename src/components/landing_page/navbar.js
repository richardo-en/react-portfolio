import React, { useState, useContext } from 'react';
import NavigationSelector from '../../additional_components/navigation_selector';
import SliderDot from '../../additional_components/slider';
import '../../static/effects.css';
import LanguageContext from '../../additional_components/language_context';
import MobileNavigationSelector from '../../additional_components/mobile_navigation';
import MobileIcon from '../../static/images/mobile_menu.webp'

export function SwitchClasses(){
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

const Navbar = () => {
  const { language, dispatch } = useContext(LanguageContext);
  const [TextColor, setTextColor] = useState('#c7eaff');
  const [Rotation, setRotation] = useState('');

  const handleButtonClick = () => {
    setRotation('rotated');

    setTimeout(function () {
      setTextColor('rgba(75, 85, 99)');
      dispatch({ type: 'TOGGLE_LANGUAGE' });
    }, 500);

    setTimeout(function () {
      setTextColor('#c7eaff');
      setRotation('');
    }, 1000);
  };

  return (
    <nav>
      <div className='hidden md:flex fixed h-screen flex-col justify-center sm:w-1/3 items-center z-40'>
        <SliderDot />
        <div className="sticky h-3/5 z-40 w-1/2 text-center">
          <NavigationSelector />
        </div>
        <span className="bg-gray-600 w-2 h-3/5 fixed rounded-lg" />
        <SliderDot />
        <button className={`fixed bottom-20 bg-gray-600 py-2 px-3 rounded-md border-2 border-white hover:scale-110 ${Rotation} `} aria-label={`language button`} onClick={handleButtonClick} style={{ color: TextColor }}>
          {language}
        </button>
      </div>
      <div className='md:hidden'>
        <button className='fixed top-5 right-5 z-50 w-10 h-10' onClick={SwitchClasses} id='mobile_button_switch' aria-label='Mobile menu button' ><img className='z-60' src={MobileIcon} alt="Mobile navigation button" /></button>
        <div className={`bg-gray-800 z-40 fixed w-full h-full hidden`} id='mobile_menu_expand'>
          <MobileNavigationSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar