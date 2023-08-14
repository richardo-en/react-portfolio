import React, { useState, useContext } from 'react';
import NavigationSelector from '../additional_components/navigation_selector';
import SliderDot from '../additional_components/slider';
import '../static/effects.css';
import LanguageContext from '../additional_components/language_context';
import languageReducer from '../additional_components/Language_reducer';


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
    <nav className="fixed h-screen flex flex-col justify-center w-1/6 items-center z-20" >
      <SliderDot/>
      <div className="flex flex-col justify-around h-3/5 z-40 w-1/2">
        <NavigationSelector />
      </div>
      <span className="bg-gray-600 w-2 h-3/5 fixed rounded-lg " />
      <SliderDot/>
      <button className={`fixed bottom-20 bg-gray-600 py-2 px-3 rounded-md border-2 border-white hover:scale-110 ${Rotation} `} onClick={handleButtonClick} style={{ color : TextColor}}>
      {language}
    </button>
    </nav>
  );
};

export default Navbar