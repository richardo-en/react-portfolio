import React from 'react';

import ProjectIntro from '../components/projects_page/project_intro';
import ProjectContext from '../components/projects_page/projects_context'
import Footer from '../additional_components/footer.js'
import MobileNavigation from '../additional_components/mobile_navigation.js';
import Navbar from '../additional_components/navbar.js';

const NavigationPicker = window.innerWidth < 768 ? true : false;
const links = ["projects_home", "university", "python", "javascript" , "csharp", "overview"]
const names = [["Domov" , "Home"], ["Univerzita" , "University"], ["Python","Python"], ["Javascript","Javascript"], ["Mobilná hra C#","Mobile game C#"], ["Súhrn projektov", "Overview of projects"]];

const ProjectsPage = () => {
  return (
    <section className='overflow-x-hidden'>
        {NavigationPicker ? 
        (<MobileNavigation links={links} names={names} />):
        (<Navbar links={links} names={names}/>)
      }
        <ProjectIntro/>
        <ProjectContext/>
        <Footer/>
    </section>
  );
};

export default ProjectsPage;
