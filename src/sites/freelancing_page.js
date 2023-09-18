import React from 'react';

import FreelanceIntro from '../components/freelance/freelance_intro';
import FreelanceContent from '../components/freelance/freelance_content';
import FreelanceContact from '../components/freelance/freelance_contact';
import { useLayoutEffect } from 'react';
 

const Freelancing = () => {
  useLayoutEffect(() => {
    document.body.style.overflowX = "hidden"
  })

      return (
        <>
          <FreelanceIntro />
          <FreelanceContent />
          <FreelanceContact />
        </>
      );
};

export default Freelancing;
