import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LanguageContext from './additional_components/language_context.js';
import languageReducer from './additional_components/Language_reducer.js';

// import Freelancing from './sites/freelancing_page.js';
import LandingPage from './sites/landing_page.js';
import Certificates from './sites/certificates_page.js';
import ProjectsPage from './sites/projects_page.js';
// import MyGallery from './components/certificates_page/certificate_gallery.js';
import './static/responsive.css'
import './static/App.css';
import './static/effects.css';

const App = () => {
  const initialState = {
    language: 'Slovak'
  };
  const [state, dispatch] = useReducer(languageReducer, initialState);

  return (
    <LanguageContext.Provider value={{ language: state.language, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path="/freelance" element={<Freelancing />} /> */}
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
