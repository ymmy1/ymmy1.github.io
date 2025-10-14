import React from 'react';
import Selfie from '../assets/png&jpg/about_me.jpg';
import '../styles/css/about.css';

export default function AboutSection() {
  const years = new Date().getFullYear() - 2018;
  return (
    <section id='about' className='about_section'>
      <h1>About Me</h1>
      <div className='box_content'>
        <div className='left_box'>
          <img src={Selfie} alt='portrait placeholder' />
        </div>
        <div className='right_box'>
          <section className='about'>
            <p>
              Front End Engineer with{' '}
              <span className='blue'>{years} years</span> of experience.
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
              Trampoline Gymnast - 5 time World Championship participant and
              finalist of a European Championship .
            </p>
            <p>
              I’ve been involved in gymnastics since early childhood, shaping a
              mindset built on precision, consistency, and continuous growth. I
              value discipline, travel, and exploring the stories behind new
              places. I coach occasionally and currently serve as a certified
              Trampoline Gymnastics Judge in the <b>U.S.</b>, <b>U.K.</b>, and{' '}
              <b>Lithuania</b>.
            </p>
          </section>
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
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
