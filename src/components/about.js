import React, { useLayoutEffect, useContext, useState } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';
import Card from '../additional_components/cards';
import { ReactComponent as MyIcon } from '../static/images/xmark-solid.svg'
import LetterN from '../static/images/letter_n.png'
import LetterE from '../static/images/letter_e.jpg'
import LetterC from '../static/images/letter_c.jpg'

import {ReactComponent as LetterR } from '../static/images/letter_r.avif'

const AboutSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({
    cardsOne: [],
    cardsTwo: []
  });

  const backgroundImages =[LetterN, LetterE, LetterC, LetterN, LetterE, LetterC]



  useLayoutEffect(() => {
    const setCoverPositionsAndSizes = () => {
      const CoverList = []
      CoverList.push(document.getElementById("cover-left"))
      CoverList.push(document.getElementById("cover-right"))
  
      const initialContainer = document.getElementById("about_animation_container");
  
      for (let index = 0; index < CoverList.length; index++) {
        CoverList[index].style.top = initialContainer.offsetTop + "px";
        CoverList[index].style.height = initialContainer.clientHeight + "px";
      }
    };
  
    setTimeout(() => {
      setCoverPositionsAndSizes();
    }, 100);
    setTextContent(language === 'Slovak' ? slovakText : englishText);
  }, [language]);
  

  const [OnClickAnimation, setOnClickAnimation] = useState(false)
  const [ExpandedText, setExpandedText] = useState([null, null]);
  const padding_top_value = (window.innerHeight / 4)
  const margin_left_value = (window.innerWidth / 4)
  const [isHovered, setIsHovered] = useState(false);
  const combinedCards = [...textContent.cardsOne, ...textContent.cardsOne];

  const handleMouse = () => {
    setIsHovered(!isHovered);
  };

  const handleButtonClick = (card) => {
    var container_list = []
    container_list.push(document.getElementById('card_container'))
    container_list.push(document.getElementById('card_container_right'))
    var expanded_card = document.getElementById("expanded_card");
    if (OnClickAnimation == false && expanded_card.style.opacity == 0) {
      setOnClickAnimation(true);
      setExpandedText([card.title, card.description]);
      for (let index = 0; index < container_list.length; index++) {
        container_list[index].addEventListener('mouseover', function () {
          container_list[index].style.animationPlayState = "paused";
        })
        container_list[index].addEventListener('mouseleave', function () {
          container_list[index].style.animationPlayState = "paused";
        })
        container_list[index].style.animationPlayState = "paused";
      }
    } else if (OnClickAnimation == true && expanded_card.style.opacity == 1) {
      setOnClickAnimation(false);
      for (let index = 0; index < container_list.length; index++) {
        container_list[index].addEventListener('mouseover', function () {
          container_list[index].style.animationPlayState = "paused";
        })
        container_list[index].addEventListener('mouseleave', function () {
          container_list[index].style.animationPlayState = "running";
        })
        container_list[index].style.animationPlayState = "running";
      }
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gray-800 flex flex-col overflow-hidden" style={{ paddingTop: padding_top_value }}>
      <div className='w-3/4 h-1/2 flex justify-around text-center items-center' style={{ marginLeft: margin_left_value }}>
        <span id='personal_image' className='w-1/4 h-96 rounded-lg' />
        {textContent.cardsOne.length > 0 && (
          <div className='max-w-3xl text-extrawhite bg-gray-700 py-5 rounded-lg'>
            <h2 className='mb-5 text-4xl'>{textContent.cardsOne[0].title}</h2>
            <p className='text-lg p-5'>{textContent.cardsOne[0].description}</p>
          </div>
        )}
      </div>

      <div className='overflow-hidden flex flex-col' id='about_animation_container'>
        <span className='w-1/4 absolute flex-1 z-10 left-0 flex-1' id='cover-left' />
        <div className='flex overflow-hidden relative'>
          <div className=" w-1/2 my-10 h-1/2">
            <div className='w-screen flex justify-around h-full' id='card_container'>
              {combinedCards.map((card, index) => (
                <button className={`w-80 h-60 mx-5 py-2 px-10 rounded-md card`} onClick={() => handleButtonClick(card)} style={{backgroundImage: `url(${backgroundImages[index]})`}}>
                  <Card key={index} title={card.title} description={card.description} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='flex overflow-hidden relative'>
          <div className=" w-1/2 my-10 h-1/2">
            <div className='w-screen flex justify-around h-full' id='card_container_right'>
              {combinedCards.map((card, index) => (
                <button className={`w-80 h-60 mx-5 py-2 px-10 rounded-md card`} onClick={() => handleButtonClick(card)} style={{backgroundImage: `url(${backgroundImages[index]})`}}>
                  <Card key={index} title={card.title} description={card.description} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <span className='w-1/4 absolute right-0 z-10 flex-1' id='cover-right' />
      </div>
      <div className={`fixed top-1/4 left-1/4 w-1/2 h-1/4 z-20 py-2 px-10 bg-white rounded-md hover:bg-gray-200 text-center ${OnClickAnimation == false ? "hidden" : ""}`} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleButtonClick}>
        <div className='flex justify-end text-center w-full h-5' style={{ opacity: (isHovered ? 1 : 0) }} id='expanded_card'>
          <MyIcon />
        </div>
        <h2 className='text-xl'>{ExpandedText[0]}</h2>
        <p>{ExpandedText[1]}</p>
      </div>
    </section>
  );
};

export default AboutSection