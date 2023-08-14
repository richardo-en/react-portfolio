import React, { useReducer } from 'react';
import LanguageContext from './additional_components/language_context.js';
import languageReducer from './additional_components/Language_reducer.js';

import Navbar from './components/navbar.js';
import HomeSection from './components/home.js';
import AboutSection from './components/about.js';
import ProjectsSection from './components/project.js';
import FutureSection from './components/future.js';
import ContactSection from './components/contact.js';


const App = () => {
  const initialState = {
    language: 'Slovak'
  };
  const [state, dispatch] = useReducer(languageReducer, initialState);

  return (
    <LanguageContext.Provider value={{ language: state.language, dispatch }}>
      <Navbar />
      <HomeSection />
      <AboutSection/>
      <ProjectsSection />
      <FutureSection />
      <ContactSection />
    </LanguageContext.Provider>
  );
};

export default App;
