import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';
import { startups } from './API/startupsApi';
import type { Project } from '../types';

export default function StartupList() {
  const [project, setProject] = useState<Project | null>(null);
  const closeGuardRef = useRef(0);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef);

  const onOpen = (p: Project) => {
    if (Date.now() - closeGuardRef.current < 300) return;
    setProject(p);
  };
  const onClose = () => setProject(null);
  const onClosingStart = () => { closeGuardRef.current = Date.now(); };

  return (
    <section id='startups' className='startups-section'>
      <h1 className='section-title'>Start Ups</h1>
      <div
        className='projects-grid'
        ref={gridRef}
        style={startups.length === 1 ? { maxWidth: 400, margin: '0 auto' } : undefined}
      >
        {startups.map((item) => (
          <ProjectBox key={item.name} project={item} onOpen={onOpen} />
        ))}
      </div>
      <ProjectModal project={project} onClose={onClose} onClosingStart={onClosingStart} />
    </section>
  );
}
