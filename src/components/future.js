import React, { useEffect, useState, useContext, useRef } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';
import './../static/App.css';

const FutureSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ future: [] });
  const futureContent = [...textContent.future];
  const [ChangeText, setChangeText] = useState([null, null]);
  const [buttonClickedIndex, setButtonClickedIndex] = useState(0);
  const [userCommand, setUserCommand] = useState("");
  const [Cursor, setCursor] = useState(false);
  const cursorRef = useRef(null);
  const [processing, setProcessing] = useState(false);
  const [dots, setDots] = useState(0);
  const [cursorWidth, setCursorWidth] = useState(0);

  useEffect(() => {
    /* LANGUAGE SETTINGS */
    const content = language === 'Slovak' ? slovakText : englishText;
    setTextContent(content);

    /* INITIAL SETTING */
    if ((ChangeText[0] == null || ChangeText[1] == null) && content.future[0].title != null && content.future[0].description != null) {
      setChangeText([content.future[0].title, content.future[0].description])
    }

    /* CURSOR ANIMATION */
    let animationFrameId = null;

    const animateCursor = () => {
      setCursor((prevCursor) => !prevCursor);
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animationFrameId = requestAnimationFrame(animateCursor);

    /* CURSOR OFFSET */
    if (cursorRef.current) {
      const cursorRect = document.getElementById("user_text").clientWidth;
      setCursorWidth(cursorRect);
    }


    /* APPEAR EFFECT */
    const scrollHandle = () => {
      const appearElements = document.querySelectorAll(".future_card");
      if (window.scrollY >= document.getElementById("future").offsetTop) {
        appearElements.forEach(element => {
          element.classList.add("appear")
        });
      } else if (window.scrollY + window.innerHeight <= document.getElementById("future").offsetTop) {
        appearElements.forEach(element => {
          element.classList.remove("appear")
        });
      }
    }

    /* CURSOUR VISIBILITY */
    const updateCursorVisibility = () => {
      const inputElement = document.getElementById('cmd_input');
      const cursorElement = cursorRef.current;

      if (inputElement && cursorElement) {
        if (inputElement.value.trim() === '') {
          cursorElement.style.display = 'block'; // Show cursor
        } else {
          cursorElement.style.display = 'none'; // Hide cursor
        }
      }

      requestAnimationFrame(updateCursorVisibility);
    };

    updateCursorVisibility();


    window.addEventListener('scroll', scrollHandle);

    return () => {
      window.removeEventListener('scroll', scrollHandle);
      cancelAnimationFrame(animationFrameId);
    };

  }, [language, ChangeText, Cursor]);

  /* BUTTON CLICK */
  const handleButtonClick = (content, index) => {
    swapTextEffect();
    setProcessing(true);
    setButtonClickedIndex(index);
    setTimeout(() => {
      setChangeText([content.title, content.description]);     
      setProcessing(false);
    }, 4000);
  }
  
  /* COMMAND LINE */
  const handleUserCommand = (command) => {
    const matchingContent = futureContent.find(
      (content) => content.command === command
    );

    if (matchingContent) {
      swapTextEffect();
      setProcessing(true);
      setTimeout(() => {
        setChangeText([matchingContent.title, matchingContent.description]);
        setProcessing(false);
      }, 4000);
      
    } else {
      const warningMessage = document.getElementById("warning_message");
      warningMessage.style.animation = "disappear 4s ease";
      setTimeout(() => {
        warningMessage.style.animation = "";
      }, 4000);
    }
    setUserCommand("");
  };
  
  /* SWAPPING TEXT EFFECT */
  
  const swapTextEffect = () => {
    const futureDisplay = document.querySelectorAll(".future_article_display")
    futureDisplay.forEach(element => {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.opacity = 1;
      }, 4000);
    });
  }

  useEffect(() => {
    if (processing) {
      const intervalId = setInterval(() => {
        setDots((prevDots) => (prevDots === 3 ? 0 : prevDots + 1));
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [processing]);

  return (
    <section id="future" className="min-h-screen bg-gray-800 flex flex-col lg:justify-between lg:flex-row p-2">
      <div className=' md:w-4/5 mx-auto w-full lg:ml-5 lg:w-4/6 flex flex-col justify-around text-extrawhite mb-10'>
        <div className='text-center p-2 lg:p-7 bg-gray-700 future_card mb-10'>
          <h1 className='text-lg lg:text-xl mb-5'>{textContent.future_introduction_title}</h1>
          <p className='text-sm'>{textContent.future_introduction}</p>
        </div>
        <div className='text-center p-2 lg:p-7 bg-white rounded-xl text-black relative future_card' id='future_display'>
          <p className='absolute top-0 left-1/2 text-black window_title'>Text Editor</p>
          <span className='text-red-700 absolute right-0 top-0 text-xl font-bold'>X</span>
          <h1 className='text-lg lg:text-2xl future_article_display'>{ChangeText[0]}</h1>
          {processing && <h1 className="text-black text-3xl font-bold">Processing{'.'.repeat(dots)}</h1>}
          <p className='future_article_display text-sm'>{ChangeText[1]}</p>
        </div>
      </div>
      <div className=' md:w-4/5 mx-auto text-center text-extrawhite w-full lg:w-1/2 lg:mx-5 flex flex-col h-3/4 my-auto future_card relative rounded-xl' id='future_selection'>
        <p className='absolute top-0 left-1/4 text-extrawhite'>User@portfolio:~</p>
        <span className='text-gray-300 absolute right-0 top-0 text-xl font-bold'>X</span>
        <div className='flex flex-col p-2 h-full text-sm'>
          <p className='text-left'><span className='text-green-custom'>User@portfolio:~$</span> help article</p>
          <p className='text-left'>article: article -[type]</p>
          <p className='text-left mt-4'>&nbsp;&nbsp;&nbsp;{textContent.future_command_help}</p>
          {futureContent.map((content, index) => (
            <button key={index} className={`text-sm text-left my-1 `} aria-label={`article button`} onClick={() => handleButtonClick(content, index)} ><span className={`${buttonClickedIndex === index ? 'selected' : ''} text-base`}>{content.command}</span>&nbsp;&nbsp;&nbsp;{content.command_des}</button>
          ))}
          <p className='text-left' id='warning_message'>{textContent.future_error_msg}</p>
          <div className='flex relative'>
            <span className='text-green-custom mr-1' id='user_text'>User@portfolio:~$</span>
            <input type="text" value={userCommand} onChange={(e) => setUserCommand(e.target.value)} onKeyPress={(e) => { if (e.key === 'Enter') { handleUserCommand(userCommand); } }} size={userCommand.length + 1} className=' text-white' id='cmd_input' />
            <span className='cursor absolute' ref={cursorRef} style={{left : cursorWidth + 1 + 'px'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
