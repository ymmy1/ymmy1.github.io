import React, { useEffect } from 'react';

import '../styles/css/skills.css';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';

import { main, other } from './API/skills';

export default function Skills({ theme = true }) {
  // Reveal animation like Education
  useEffect(() => {
    const reveal = () => {
      const el = document.querySelector('.skillsbox');
      if (!el) return;
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 200;
      if (elementTop < windowHeight - elementVisible)
        el.classList.add('active');
      else el.classList.remove('active');
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section>
      <div id='skills' className='skillsbox fade-bottom'>
        <h1 id='main_skills'>Main Skills</h1>
        <div className='main-skills fade-target'>
          {main.map((skill, index) => (
            <div key={index} className='skill-box'>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <h1>Additional Skills</h1>
        <div className='other-skills fade-target'>
          {other.map((skill, index) => (
            <div id={skill.name} key={index} className='skill-box'>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
