import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { frontend, backend, workflow, design } from './API/skills';
import type { Skill } from '../types';
import '../styles/scss/skills.scss';

function SkillIcon({ icon, name }: { icon: Skill['icon']; name: string }) {
  if (typeof icon === 'string') {
    return <img className='skill-item__icon' src={icon} alt={name} />;
  }
  const Icon = icon;
  return <Icon className='skill-item__icon' size={52} />;
}

function SkillGroup({ label, skills }: { label: string; skills: Skill[] }) {
  return (
    <div className='skills-group'>
      <p className='skills-group__label'>{label}</p>
      <div className='skills-group__grid'>
        {skills.map((skill) => (
          <div key={skill.name} className='skill-item'>
            <SkillIcon icon={skill.icon} name={skill.name} />
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
        <SkillGroup label='Frontend & UI' skills={frontend} />
        <SkillGroup label='Backend & Data' skills={backend} />
        <SkillGroup label='Workflow & AI' skills={workflow} />
        <SkillGroup label='Design & Collaboration' skills={design} />
      </div>
    </section>
  );
}
