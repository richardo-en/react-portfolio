import React from 'react';

import HomeSection from '../components/landing_page/home';
import AboutSection from '../components/landing_page/about.js';
import ProjectsSection from '../components/landing_page/project.js';
import FutureSection from '../components/landing_page/future.js';
import ContactSection from '../components/landing_page/contact.js';
import Navbar from '../components/landing_page/navbar.js'

const LandingPage = () => {
    
      return (
      <>
        <Navbar />
        <HomeSection />
        <AboutSection/>
        <ProjectsSection />
        <FutureSection />
        <ContactSection />
      </>
      );
};

export default LandingPage;
