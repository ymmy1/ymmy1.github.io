import React, { useState, useEffect, useRef } from 'react';

// Reuse Projects CSS and classes for identical look
import '../styles/css/projects.css';

import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';
import { startups } from './API/startupsApi';

export default function StartupList() {
  const [project, setProject] = useState(null);
  const closeGuardRef = useRef(0);
  const onOpen = (api) => {
    if (Date.now() - closeGuardRef.current < 300) return;
    setProject(api);
  };
  const onClose = () => setProject(null);
  const onClosingStart = () => {
    closeGuardRef.current = Date.now();
  };
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
    <section id='startups' className='section_4'>
      <h1>Start Ups</h1>
      <div className='all_projects projects_grid fade-bottom' ref={containerRef}>
        {startups.map((item, index) => (
          <div
            key={index}
            className='project_tile'
            style={startups.length === 1 ? { gridColumnStart: 2 } : undefined}
          >
            <ProjectBox api={item} onOpen={onOpen} />
          </div>
        ))}

        <ProjectModal project={project} onClose={onClose} onClosingStart={onClosingStart} />
      </div>
    </section>
  );
}
