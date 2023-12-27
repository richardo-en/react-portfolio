import React from 'react';

import ProjectIntro from '../components/projects_page/project_intro';
import ProjectContext from '../components/projects_page/projects_context'

const ProjectsPage = () => {
  return (
    <>
      {/* <Navbar /> */}
        <ProjectIntro/>
        <ProjectContext/>
    </>
  );
};

export default ProjectsPage;
