import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';
import { api } from './API/projectsApi';
import type { Project } from '../types';

export default function Projects() {
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
    <section id='projects' className='projects-section'>
      <h1 className='section-title'>Projects</h1>
      <div className='projects-grid fade-bottom' ref={gridRef}>
        {api.map((item) => (
          <ProjectBox key={item.name} project={item} onOpen={onOpen} />
        ))}
      </div>
      <ProjectModal project={project} onClose={onClose} onClosingStart={onClosingStart} />
    </section>
  );
}
