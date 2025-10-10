import React, { useEffect, useRef } from 'react';
import '../styles/css/assessments.css';

// Icons (using repo assets)
import cssIcon from '../assets/AVIF/skills/css_new.avif';
import htmlIcon from '../assets/AVIF/skills/html.avif';
import jsIcon from '../assets/AVIF/skills/js.avif';
import reactIcon from '../assets/AVIF/skills/react.avif';

export default function LinkedInAssessments({ theme = true }) {
  const sectionRef = useRef(null);

  // Keep original pools but phrase as requested
  const items = [
    { name: 'CSS', top: 5, pool: '2M', year: 2023, icon: cssIcon, cls: 'css' },
    {
      name: 'HTML',
      top: 15,
      pool: '3.8M',
      year: 2023,
      icon: htmlIcon,
      cls: 'html',
    },
    {
      name: 'JavaScript',
      top: 15,
      pool: '2.5M',
      year: 2023,
      icon: jsIcon,
      cls: 'javascript',
    },
    {
      name: 'React',
      top: 20,
      pool: '2M',
      year: 2023,
      icon: reactIcon,
      cls: 'react',
    },
  ];

  // Fade-up on reveal: match education/skills scroll-reveal
  useEffect(() => {
    const el = sectionRef.current;
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
    <section id='assessments' className='assessments-section'>
      <div className='assessments-wrap fade-bottom' ref={sectionRef}>
        <h1>LinkedIn Assessments</h1>
        <div className='cards-grid fade-target'>
          {items.map(({ name, top, pool, year, icon, cls }) => (
            <article
              key={name}
              className={`li-card skill-${cls}`}
              aria-label={`${name} LinkedIn Assessment`}
            >
              <div className='card-top'>
                <img
                  className='skill-icon'
                  src={icon}
                  alt={`${name} icon`}
                  loading='lazy'
                />
                <span className='year' aria-label='year'>
                  {year}
                </span>
              </div>
              <h3 className='card-title'>
                Top <span className='highlight'>{top}%</span> in {name}.
              </h3>
              <p className='card-sub'>
                out of {pool} people who took this test
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
