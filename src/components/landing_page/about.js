import React, { useLayoutEffect, useContext, useState } from 'react';
import slovakText from '../../content/slovak.json';
import englishText from '../../content/english.json';
import LanguageContext from '../../additional_components/language_context';
// import Card from '../../additional_components/cards';
// import { ReactComponent as MyIcon } from '../../static/images/xmark-solid.svg'
// import LetterN from '../../static/images/letter_n.webp'
// import LetterE from '../../static/images/letter_e.webp'
// import LetterM from '../../static/images/letter_m.webp'
// import LetterC from '../../static/images/letter_c.webp'
// import LetterA from '../../static/images/letter_a.webp'
// import LetterD from '../../static/images/letter_d.webp'
import Ilustration from '../../static/images/personal_image_intro.JPG'
// import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = () => {
  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({
    workInformation: [],
  });

  // const backgroundImages = [LetterE, LetterN, LetterM, LetterE, LetterN, LetterM]
  // const backgroundImagesTwo = [LetterA, LetterC, LetterD, LetterA, LetterC, LetterD]

  useLayoutEffect(() => {
    const setCoverPositionsAndSizes = () => {
      const card_buttons = []
      card_buttons.push(document.querySelectorAll(".card_first"))
      card_buttons.push(document.querySelectorAll(".card_second"))
      for (let i = 0; i < card_buttons.length; i++) {
        var right = 10;
        var zIndex = 30;
        for (let a = 0; a < card_buttons[i].length; a++) {
          card_buttons[i][a].style.right = card_buttons[i][a].style.right + right + "px"
          card_buttons[i][a].style.top = card_buttons[i][a].style.top + right + "px"
          card_buttons[i][a].classList.add = "z-" + zIndex
          right += 75;
          zIndex += 10;
        }

      }
    };

    setTimeout(() => {
      setCoverPositionsAndSizes();
    }, 100);
    setTextContent(language === 'Slovak' ? slovakText : englishText);



  }, [language]);


  // const [OnClickAnimation, setOnClickAnimation] = useState(false)
  // const [ExpandedText, setExpandedText] = useState([null, null]);
  const margin_left_value = window.innerWidth <= 768 ? (window.innerWidth / 0) : window.innerWidth / 8
  // const [isHovered, setIsHovered] = useState(false);


  // const handleMouse = () => {
  //   setIsHovered(!isHovered);
  // };

  // const handleButtonClick = (card) => {
  //   document.getElementById("about_title").innerHTML = card.title;
  //   document.getElementById("about_context").innerHTML = card.description;
  // };

  return (
    <section id="about" className="bg-gray-800 flex flex-col items-center mt-32 mb-72 px-5 md:px-28 lg:px-0">
      <div className='xl:w-3/4 h-1/2 flex flex-col lg:flex-row justify-around text-center items-center mt-60 border-b-2 border-testcolor' style={{ marginLeft: margin_left_value }}>
        <img src={Ilustration} alt="Illustration" className='w-full mb-5 lg:w-1/2 rounded-lg -mt-40 relative z-40' id='contact_image'/>
        {textContent.landingInformation && (
          <div className='max-w-3xl lg:w-1/2 text-extrawhite py-5'>
            <h2 className='text-4xl lg:text-6xl font-gloock px-5 relative z-10 title_text'>{textContent.landingTitle}</h2>
            <p className='text-md lg:text-xl p-5 font-Inconsolata'>{textContent.landingInformation}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection
/* <div className='overflow-hidden flex flex-col justify-around bg-gray-800 h-screen col-span-3' id='about_animation_container'>
  <div className='flex relative h-full'>
    <div className='w-screen flex flex-col h-full relative right-20' id='card_container'>
      {textContent.cardsOne.map((card, index) => (
        <button key={index} className={`lg:w-80 h-60 top-0 absolute rounded-md card_first hover:z-50`} aria-label='Card information' onClick={() => handleButtonClick(card)} style={{ backgroundImage: `url(${backgroundImages[index]})` }}>
          <div className='about_text_background'>
            <Card title={card.title} description={card.description} />
          </div>
        </button>
      ))}
    </div>
  </div>

  <div className='flex relative h-full'>
    <div className='w-screen flex flex-col h-full relative right-20' id='card_container_right'>
      {textContent.cardsTwo.map((card, index) => (
        <button key={index} className={`lg:w-80 h-60 h-40 absolute rounded-md card_second hover:z-50`} aria-label='Card information' onClick={() => handleButtonClick(card)} style={{ backgroundImage: `url(${backgroundImagesTwo[index]})` }}>
          <div className='about_text_background'>
            <Card title={card.title} description={card.description} />
          </div>
        </button>
      ))}
    </div>
  </div>
</div> */