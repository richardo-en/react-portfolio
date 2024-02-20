import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LanguageContext from './additional_components/language_context.js';
import languageReducer from './additional_components/Language_reducer.js';

// import additional parts
import Navbar from './additional_components/navbar.js';
import MobileNavigation from './additional_components/mobile_navigation.js';
import Footer from './additional_components/footer.js';
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

  const NavigationPicker = window.innerWidth < 768 ? true : false;
  const links = ["/", "/projects", "/certificate"];
  const names = [["Domov", "Home"], ["Moje projekty", "My projects"], ["Certifikáty", "Certifikáty"]];

  return (
    <LanguageContext.Provider value={{ language: state.language, dispatch }}>
      <BrowserRouter>
        {NavigationPicker ?
          (<MobileNavigation links={links} names={names} />) :
          (<Navbar links={links} names={names} />)
        }
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
