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
      if (elementTop < windowHeight - elementVisible) el.classList.add('active');
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
      <div className='bottom-section'>
        <p className='bottom_text'>Find Out More</p>
        <div className='bottom_buttons'>
          <a
            className={`button-orange ${theme ? '' : 'button-gray'}`}
            href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon fontSize='medium' color='#fff' />
            LinkedIn
          </a>
          <a
            className={`button-orange ${theme ? '' : 'button-gray'}`}
            href={resume}
            target='_blank'
            rel='noreferrer'
          >
            <FileDownloadIcon fontSize='medium' color='#fff' /> Resume
          </a>
          <a
            className={`button-orange ${theme ? '' : 'button-gray'}`}
            href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=oleg.ymmy@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <SendIcon fontSize='medium' color='#fff' /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

