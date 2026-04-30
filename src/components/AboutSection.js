import React, { useEffect } from 'react';
import Selfie from '../assets/AVIF/about_me_fe.avif';
import Tramp from '../assets/AVIF/about_me_tramp.avif';
import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';

import '../styles/css/about.css';

export default function AboutSection() {
  const years = new Date().getFullYear() - 2020;
  // Reveal on scroll like other sections
  useEffect(() => {
    const el = document.querySelector('.about_section .box_content');
    if (!el) return;
    const reveal = () => {
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
              Software Engineer with {years}+ years of experience building and
              maintaining production web applications. <br />
              I specialize in frontend systems using React and TypeScript, with
              hands-on experience owning features end-to-end, from UI and state
              management to auth, payments, and cloud deployment. <br />
              My background spans enterprise SaaS, early-stage startups, and
              founder-led projects, where I’ve worked on real products with real
              users and real constraints.
              <br />
              <hr />
              Outside of engineering, I have an elite gymnastics background,
              having competed at World and European Championships. I value
              discipline, long-term growth, and building things that last.
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
