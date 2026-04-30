import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { frontend, backend, tools } from './API/skills';
import type { Skill } from '../types';
import '../styles/scss/skills.scss';

interface SkillGroupProps {
  label: string;
  skills: Skill[];
}

function SkillGroup({ label, skills }: SkillGroupProps) {
  return (
    <div className='skills-group'>
      <p className='skills-group__label'>{label}</p>
      <div className='skills-group__grid'>
        {skills.map((skill) => (
          <div key={skill.name} className='skill-item'>
            <img
              className='skill-item__icon'
              src={skill.icon}
              alt={skill.name}
            />
            <span className='skill-item__name'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section id='skills' className='skills-section'>
      <h1 className='section-title'>Skills</h1>
      <div className='skills-groups fade-bottom' ref={ref}>
        <SkillGroup label='Frontend' skills={frontend} />
        <SkillGroup label='Backend & Databases' skills={backend} />
        <SkillGroup label='Tools & DevOps' skills={tools} />
      </div>
    </section>
  );
}
