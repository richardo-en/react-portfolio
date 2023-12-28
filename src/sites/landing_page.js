import React from 'react';

import HomeSection from '../components/landing_page/home';
import AboutSection from '../components/landing_page/about.js';
import ContactSection from '../components/landing_page/contact.js';
import Navbar from '../components/landing_page/navbar.js'
import InterestSection from '../components/landing_page/interest';
import WorkExperience from '../components/landing_page/work_experience';
import Footer from '../additional_components/footer.js'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <WorkExperience />
      <InterestSection />
      <ContactSection />
      <Footer/>
    </>
  );
};

export default LandingPage;
