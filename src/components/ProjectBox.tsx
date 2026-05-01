import type { Project } from '../types';
import '../styles/scss/projects.scss';

interface ProjectBoxProps {
  project: Project;
  onOpen: (p: Project) => void;
}

export default function ProjectBox({ project, onOpen }: ProjectBoxProps) {
  const { name, desc, img, languages, labelClass, label } = project;

  return (
    <div
      className='project-tile'
      onClick={() => onOpen(project)}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      aria-label={`Open ${name}`}
    >
      {label && labelClass && (
        <img className='project-tile__badge' src={label} alt={labelClass} />
      )}
      <figure className='project-tile__figure'>
        <img className='project-tile__img' src={img} alt={name} loading='lazy' />
      </figure>
      <div className='project-tile__info'>
        <p className='project-tile__name'>{name}</p>
        <p className='project-tile__desc'>{desc}</p>
        <div className='project-tile__bar'>
          {languages.map((lng) => (
            <div
              key={lng.name}
              className={`project-tile__bar-segment ${lng.name}`}
              style={{ width: lng.width }}
            />
          ))}
        </div>
        <ul className='project-tile__langs'>
          {languages.map((lng) => (
            <li key={lng.name} className={`project-tile__lang ${lng.name}`}>
              {lng.summary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
