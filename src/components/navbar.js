import React, { useState, useContext } from 'react';
import NavigationSelector from '../additional_components/navigation_selector';
import SliderDot from '../additional_components/slider';
import '../static/effects.css';
import LanguageContext from '../additional_components/language_context';
import MobileNavigationSelector from '../additional_components/mobile_navigation';
import MobileIcon from '../static/images/mobile_menu.png'


const Navbar = () => {
  const { language, dispatch } = useContext(LanguageContext);
  const [TextColor, setTextColor] = useState('#c7eaff');
  const [Rotation, setRotation] = useState('');
  const [ButtonClick, setButtonClick] = useState("hidden")

  const handleMobileButton = () => {
    if (ButtonClick === "hidden") {
      setButtonClick("display_menu")
    } else {
      setButtonClick("hide_menu")
      setTimeout(() => {
        setButtonClick("hidden")
      }, 500);
    }
  }

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
      <div className='hidden md:flex fixed h-screen flex-col justify-center sm:w-1/3 items-center z-20'>
        <SliderDot />
        <div className="sticky h-3/5 z-40 w-1/2 text-center">
          <NavigationSelector />
        </div>
        <span className="bg-gray-600 w-2 h-3/5 fixed rounded-lg" />
        <SliderDot />
        <button className={`fixed bottom-20 bg-gray-600 py-2 px-3 rounded-md border-2 border-white hover:scale-110 ${Rotation} `} onClick={handleButtonClick} style={{ color: TextColor }}>
          {language}
        </button>
      </div>
      <div className='md:hidden'>
        <button className='fixed top-5 right-5 z-50 w-10 h-10' onClick={handleMobileButton} id='mobile_button_switch'><img className='z-60' src={MobileIcon} /></button>
        <div className={`bg-gray-800 z-40 fixed w-full h-full ${ButtonClick}`}>
          <MobileNavigationSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar