// Preloader.js
import React, { lazy, useEffect } from 'react';

const HomeSection = React.lazy(() => import('../components/landing_page/home'));
const AboutSection = React.lazy(() => import('../components/landing_page/about.js'));
const Navbar = React.lazy(() => import('../components/landing_page/navbar.js'));
const InterestSection = React.lazy(() => import('../components/landing_page/interest.js'));
const WorkExperience = React.lazy(() => import('../components/landing_page/work_experience.js'));
const ContactSection = React.lazy(() => import('../components/landing_page/contact.js'));

const Preloader = () => {
  useEffect(() => {
    // HomeSection.preload();
    // Navbar.preload();
    AboutSection.preload();
    InterestSection.preload();
    WorkExperience.preload();
    ContactSection.preload();
  }, []);

  return null;
};

export default Preloader;
