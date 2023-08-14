import React, { useEffect, useState, useContext } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from '../additional_components/language_context';
import './../static/App.css';

const FutureSection = () => {

  const { language } = useContext(LanguageContext);
  const [textContent, setTextContent] = useState({ future: [] });
  const futureContent = [...textContent.future];
  const [ChangeText, setChangeText] = useState([null, null]);
  useEffect(() => {
    const content = language === 'slovak' ? slovakText : englishText;
    setTextContent(content);

    if ((ChangeText[0] == null || ChangeText[1] == null) && content.future[0].title != null && content.future[0].description != null) {
      setChangeText([content.future[0].title, content.future[0].description])
    }

  }, [language]);

  const handleButtonClick = (content) => {
    setChangeText([content.title, content.description]);
  }

  return (
    <section id="future" className="min-h-screen bg-gray-800 flex justify-between p-10">
      <div className='w-2/3 flex flex-col justify-around'>
        <div className='text-center p-14 bg-blue-600'>
          <h1 className='text-2xl'>Do do proident nisi Lorem deserunt commodo irure officia ad consectetur nulla ullamco.</h1>
          <p>Consequat duis sint anim mollit sunt commodo pariatur cupidatat magna. Exercitation do proident laboris labore sint. Sit ipsum laboris sit excepteur. Proident eu pariatur non id ipsum ipsum esse cupidatat. Lorem enim magna cillum deserunt velit velit sunt minim enim aliquip magna ex velit aute.</p>
        </div>
        <div className='text-center p-14 bg-blue-600'>
          <h1 className='text-2xl'>{ChangeText[0]}</h1>
          <p>{ChangeText[1]}</p>
        </div>
      </div>
      <div className='text-center py-20 bg-white w-1/4 flex flex-col'>
        <h1 className='text-2xl mb-14'>Title</h1>
        <div className='flex flex-col text-xl p-10 h-full'>
            {futureContent.map((content, index) => (
              <button key={index} className='text-xl text-left my-4' onClick={() => handleButtonClick(content)} >{content.title}</button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
 