import React, { useEffect } from 'react';
import Selfie from '../assets/AVIF/about_me_fe.avif';
import Tramp from '../assets/AVIF/about_me_tramp.avif';
import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';

import '../styles/css/about.css';

export default function AboutSection() {
  const years = new Date().getFullYear() - 2018;
  // Reveal on scroll like other sections
  useEffect(() => {
    const el = document.querySelector('.about_section .box_content');
    if (!el) return;
    const reveal = () => {
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
    <section id='about' className='about_section'>
      <h1>About Me</h1>
      <div className='box_content fade-bottom'>
        <div className='left_box fade-target'>
          <div className='flip-card' tabIndex={0} aria-label='Flip about photo'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img src={Selfie} alt='Portrait' />
              </div>
              <div className='flip-card-back'>
                <img src={Tramp} alt='Trampoline portrait' />
              </div>
            </div>
          </div>
        </div>
        <div className='right_box fade-target'>
          <div className='about'>
            <p>
              Front End Engineer with{' '}
              <span className='blue'>{years}+ years</span> of experience.
            </p>
            <p>
              <i>Self-taught. Disciplined. Fast Paced.</i>
            </p>
            <p>
              My focus is on creating fast, intuitive, and scalable front-end
              systems. I work primarily with <b>React</b>, <b>TypeScript</b>,{' '}
              <b>Vite</b>, <b>Firebase</b>, and <b>Cloudflare</b>, delivering
              modern, secure, and visually polished applications.
            </p>
            <p>
              <span className='red'>
                No one outworks a self-taught engineer.
              </span>{' '}
              We learn quicker, integrate faster, and stay longer until it’s
              right.
            </p>

            <hr />

            <p>
              My hobby is Gymnastics. I'm a 5 time World Championship
              participant and finalist of a European Championship.
            </p>
            <p>
              I value discipline, travel, and exploring the stories behind new
              places. I coach occasionally and currently serve as a certified
              Trampoline Gymnastics Judge in the <b>U.S.</b>, <b>U.K.</b>, and{' '}
              <b>Lithuania</b>.
            </p>
          </div>
          <div className='about_actions'>
            <a
              className='action_btn LinkedIn'
              href='https://www.linkedin.com/in/oleg-nosyrev/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
            <a
              className='action_btn Contact'
              href='mailto:oleg.ymmy@gmail.com'
              rel='noreferrer'
              target='_blank'
            >
              Contact Me
            </a>
            <a
              className='action_btn Resume'
              href={resume}
              rel='noreferrer'
              target='_blank'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
