import React from 'react';

import ProjectIntro from '../components/projects_page/project_intro';
import ProjectContext from '../components/projects_page/projects_context'
import Footer from '../additional_components/footer.js'

const ProjectsPage = () => {
  return (
    <section className='overflow-x-hidden'>
        <ProjectIntro/>
        <ProjectContext/>
        <Footer/>
    </section>
  );
};

export default ProjectsPage;
