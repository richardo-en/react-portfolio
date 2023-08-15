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

  useEffect(() => {
    /* LANGUAGE SETTINGS */
    const content = language === 'slovak' ? slovakText : englishText;
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

  }, [language]);

  /* BUTTON CLICK */
  const handleButtonClick = (content, index) => {
    setChangeText([content.title, content.description]);
    setButtonClickedIndex(index);
  }

  /* COMMAND LINE */
  const handleUserCommand = (command) => {
    const matchingContent = futureContent.find(
      (content) => content.title === command
    );

    if (matchingContent) {
      setChangeText([matchingContent.title, matchingContent.description]);
    } else {
      console.log("wrong input")
    }
  };

  return (
    <section id="future" className="min-h-screen bg-gray-800 flex justify-between p-10 ">
      <div className='w-2/3 flex flex-col justify-around text-extrawhite'>
        <div className='text-center p-14 bg-gray-700 future_card'>
          <h1 className='text-2xl'>Do do proident nisi Lorem deserunt commodo irure officia ad consectetur nulla ullamco.</h1>
          <p>Consequat duis sint anim mollit sunt commodo pariatur cupidatat magna. Exercitation do proident laboris labore sint. Sit ipsum laboris sit excepteur. Proident eu pariatur non id ipsum ipsum esse cupidatat. Lorem enim magna cillum deserunt velit velit sunt minim enim aliquip magna ex velit aute.</p>
        </div>
        <div className='text-center p-14 bg-white rounded-xl text-black relative future_card' id='future_display'>
          <p className='absolute top-0 left-1/2 text-black window_title'>Text Editor</p>
          <span className='text-red-700 absolute right-0 top-0 text-xl font-bold'>X</span>
          <h1 className='text-2xl'>{ChangeText[0]}</h1>
          <p>{ChangeText[1]}</p>
        </div>
      </div>
      <div className='text-center text-extrawhite w-1/4 flex flex-col h-3/4 my-auto future_card relative rounded-xl' id='future_selection'>
        <p className='absolute top-0 left-1/4 text-black'>User@portfolio:~</p>
        <span className='text-gray-300 absolute right-0 top-0 text-xl font-bold'>X</span>
        <div className='flex flex-col text-xl p-2 h-full'>
          <p className='text-left text-sm'><span className='text-green-custom'>User@portfolio:~$</span> help article</p>
          <p className='text-left text-sm'>article: article -[type]</p>
          <p className='text-left text-sm mt-4'>&nbsp;Displays system chosen article of projects that are being worked on or that are planned to be done in the future</p>
          {futureContent.map((content, index) => (
            <button key={index} className={`text-base text-left my-1 ${buttonClickedIndex === index ? 'selected' : ''}`} onClick={() => handleButtonClick(content, index)} >{content.title}</button>
          ))}
          <div className='flex relative'>
            <input type="text" value={userCommand} onChange={(e) => setUserCommand(e.target.value)} onKeyPress={(e) => { if (e.key === 'Enter') { handleUserCommand(userCommand); } }} size={userCommand.length + 1} className=' text-white' id='cmd_input' />
            <span className='cursor absolute' ref={cursorRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
