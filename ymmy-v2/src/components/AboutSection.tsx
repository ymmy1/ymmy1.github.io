import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Selfie from '../assets/AVIF/about_me_fe.avif';
import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';
import '../styles/scss/about.scss';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  const years = new Date().getFullYear() - 2018;

  return (
    <section id='about' className='about-section'>
      <h1 className='section-title'>About Me</h1>
      <div className='about-layout fade-bottom' ref={ref}>
        <div className='about-photo'>
          <div className='about-photo__frame'>
            <img className='about-photo__img' src={Selfie} alt='Portrait of Oleg Nosyrev' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-text'>
            <p>
              Front End Engineer with{' '}
              <span className='highlight-blue'>{years}+ years</span> of experience.
            </p>
            <p>
              <em>Self-taught. Disciplined. Fast Paced.</em>
            </p>
            <p>
              My focus is on creating fast, intuitive, and scalable front-end
              systems. I work primarily with <strong>React</strong>,{' '}
              <strong>TypeScript</strong>, <strong>Vite</strong>,{' '}
              <strong>Firebase</strong>, and <strong>Cloudflare</strong>, delivering
              modern, secure, and visually polished applications.
            </p>
            <p>
              <span className='highlight-red'>
                No one outworks a self-taught engineer.
              </span>{' '}
              We learn quicker, integrate faster, and stay longer until it's right.
            </p>
            <hr />
            <p>
              My hobby is Gymnastics. I'm a 5-time World Championship participant
              and finalist of a European Championship.
            </p>
            <p>
              I value discipline, travel, and exploring the stories behind new
              places. I coach occasionally and currently serve as a certified
              Trampoline Gymnastics Judge in the <strong>U.S.</strong>,{' '}
              <strong>U.K.</strong>, and <strong>Lithuania</strong>.
            </p>
          </div>

          <div className='about-actions'>
            <a
              className='about-btn'
              href='https://www.linkedin.com/in/oleg-nosyrev/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
            <a
              className='about-btn'
              href='mailto:oleg.ymmy@gmail.com'
              rel='noreferrer'
            >
              Contact Me
            </a>
            <a
              className='about-btn'
              href={resume}
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
