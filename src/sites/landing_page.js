import React from 'react';
import HomeSection from '../components/landing_page/home';
import ContactSection from '../components/landing_page/contact.js';
import InterestSection from '../components/landing_page/interest';
import WorkExperience from '../components/landing_page/work_experience';

const LandingPage = () => {
  return (
    <>
      <HomeSection />
      <WorkExperience/>
      <InterestSection />
      <ContactSection/>
    </>
  );
};

export default LandingPage;
