import React, { useState } from 'react';

import '../styles/css/projects.css';

import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';
import { api } from './API/projectsApi';

import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
  const [opennedProject, setOpennedProject] = useState({});
  const handleOpen = (api) => {
    setOpennedProject(api);
  };
  const handleClose = () => setOpennedProject({});

  return (
    <section id='projects' className='section_4'>
      <h1>Projects</h1>
      <div className='all_projects'>
        <Carousel interval={null}>
          {api.map((api, index) => (
            <Carousel.Item key={index}>
              <ProjectBox api={api} handleOpen={handleOpen} />
            </Carousel.Item>
          ))}
        </Carousel>

        <ProjectModal
          opennedProject={opennedProject}
          handleClose={handleClose}
        />
      </div>
    </section>
  );
}
