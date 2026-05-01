import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';
import '../styles/scss/about.scss';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  const years = new Date().getFullYear() - 2020;

  return (
    <section id='about' className='about-section'>
      <h1 className='section-title'>About Me</h1>

      <div className='about-layout fade-bottom' ref={ref}>
        <div className='about-stats'>
          <div className='about-stat'>
            <span className='about-stat__value'>{years}+</span>
            <span className='about-stat__label'>Years of Experience</span>
          </div>
          <div className='about-stat'>
            <span className='about-stat__value'>2+</span>
            <span className='about-stat__label'>Startups Launched</span>
          </div>
          <div className='about-stat'>
            <span className='about-stat__value'>5×</span>
            <span className='about-stat__label'>World Championships</span>
          </div>
          <div className='about-stat'>
            <span className='about-stat__value'>Judge</span>
            <span className='about-stat__label'>US · UK · Lithuania</span>
          </div>
        </div>

        <div className='about-bio'>
          <div className='about-bio__col'>
            <p className='about-bio__overline'>Engineer</p>
            <p>
              Front End Engineer focused on fast, intuitive, and scalable
              systems. I work primarily with <strong>React</strong>,{' '}
              <strong>TypeScript</strong>, <strong>Vite</strong>,{' '}
              <strong>Firebase</strong>, and <strong>Cloudflare</strong>,
              delivering modern, secure, and visually polished applications.
            </p>
            <p className='about-bio__callout'>
              I learn by building, ship quickly, and stay with a problem until
              it's resolved.
            </p>
            <p className='about-bio__tagline'>
              <em>Self-taught. Disciplined. Fast Paced.</em>
            </p>
          </div>

          <div className='about-bio__col'>
            <p className='about-bio__overline'>Athlete</p>
            <p>
              5-time World Championship participant and finalist of a European
              Championship in Trampoline Gymnastics.
            </p>
            <p>
              Certified Trampoline Gymnastics Judge in the <strong>U.S.</strong>
              , <strong>U.K.</strong>, and <strong>Lithuania</strong>. I coach
              occasionally and value discipline, travel, and the stories behind
              new places.
            </p>
          </div>
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
    </section>
  );
}
