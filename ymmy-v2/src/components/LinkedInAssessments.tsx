import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/scss/assessments.scss';

import cssIcon from '../assets/AVIF/skills/css_new.avif';
import htmlIcon from '../assets/AVIF/skills/html.avif';
import jsIcon from '../assets/AVIF/skills/js.avif';
import reactIcon from '../assets/AVIF/skills/react.avif';

const items = [
  { name: 'CSS', top: 5, pool: '2M', year: 2023, icon: cssIcon },
  { name: 'HTML', top: 15, pool: '3.8M', year: 2023, icon: htmlIcon },
  { name: 'JavaScript', top: 15, pool: '2.5M', year: 2023, icon: jsIcon },
  { name: 'React', top: 20, pool: '2M', year: 2023, icon: reactIcon },
];

export default function LinkedInAssessments() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section id='assessments'>
      <h1 className='section-title'>LinkedIn Assessments</h1>
      <div className='assessments-grid fade-bottom' ref={ref}>
        {items.map(({ name, top, pool, year, icon }) => (
          <article
            key={name}
            className='assessment-card'
            aria-label={`${name} LinkedIn Assessment`}
          >
            <div className='assessment-card__header'>
              <img
                className='assessment-card__icon'
                src={icon}
                alt={`${name} icon`}
                loading='lazy'
              />
              <span className='assessment-card__year'>{year}</span>
            </div>
            <p className='assessment-card__percentile'>Top {top}%</p>
            <p className='assessment-card__label'>{name}</p>
            <p className='assessment-card__sub'>
              out of {pool} people who took this test
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
