import React, { useState } from 'react';

import '../styles/css/projects.css';

import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';
import { api } from './API/projectsApi';

import { useEffect, useRef } from 'react';

export default function Projects() {
  const [openedProject, setOpenedProject] = useState({});
  const handleOpen = (api) => {
    setOpenedProject(api);
  };
  const handleClose = () => setOpenedProject({});
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reveal = () => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 200;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    };

    reveal();
    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section id='projects' className='section_4'>
      <h1>Projects</h1>
      <div className='all_projects projects_grid fade-bottom' ref={containerRef}>
        {api.map((item, index) => (
          <div key={index} className='project_tile'>
            <ProjectBox api={item} handleOpen={handleOpen} />
          </div>
        ))}

        <ProjectModal openedProject={openedProject} handleClose={handleClose} />
      </div>
    </section>
  );
}
