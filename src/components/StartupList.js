import React, { useState, useEffect, useRef } from 'react';

// Reuse Projects CSS and classes for identical look
import '../styles/css/projects.css';

import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';
import { startups } from './API/startupsApi';

export default function StartupList() {
  const [openedProject, setOpenedProject] = useState({});
  const handleOpen = (api) => setOpenedProject(api);
  const handleClose = () => setOpenedProject({});
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const tiles = Array.from(container.querySelectorAll('.project_tile'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            const idx = Number(el.dataset.index) || 0;
            el.style.setProperty('--delay', `${idx * 80}ms`);
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    tiles.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id='startups' className='section_4'>
      <h1>Start Ups</h1>
      <div className='all_projects projects_grid' ref={containerRef}>
        {startups.map((item, index) => (
          <div
            key={index}
            className='project_tile'
            data-index={index}
            style={startups.length === 1 ? { gridColumnStart: 2 } : undefined}
          >
            <ProjectBox api={item} handleOpen={handleOpen} />
          </div>
        ))}

        <ProjectModal openedProject={openedProject} handleClose={handleClose} />
      </div>
    </section>
  );
}
