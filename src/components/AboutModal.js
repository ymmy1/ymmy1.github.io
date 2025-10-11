import React from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/css/about.css';

function AboutModal({ aboutOpen, handleAboutClose }) {
  return (
    <Modal
      open={aboutOpen}
      onClose={handleAboutClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
    >
      <Fade in={aboutOpen}>
        <div className='modal_box about_modal'>
          <CloseIcon
            size='large'
            className='closeIcon'
            onClick={handleAboutClose}
          />
          <h1 className='project_title'>About Me</h1>
          <div className='box_content'>
            <div className='left_box'>
              <img
                src='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
                alt='portrait placeholder'
              />
            </div>
            <div className='right_box'>
              <p>
                Hi, I’m Oleg (Logan) Nosyrev — a front‑end developer who loves
                crafting clean, thoughtful interfaces and smooth user
                experiences. I’m curious by nature, pragmatic in execution, and
                happiest when design and code click.
              </p>
              <p>
                I bring a builder’s mindset: iterate quickly, sweat the details,
                and communicate clearly. Outside of code, I’m a high‑energy
                coach and lifelong learner. If you’re exploring a role,
                collaboration, or just want to talk shop — I’d love to connect.
              </p>

              <div className='about_actions'>
                <a
                  className='action_btn LinkedIn'
                  href='https://www.linkedin.com/in/oleg-nosyrev/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon /> LinkedIn
                </a>
                <a
                  className='action_btn Contact'
                  href='mailto:oleg.ymmy@gmail.com'
                  rel='noreferrer'
                >
                  <EmailIcon /> Contact Me
                </a>
                <button className='action_btn Close' onClick={handleAboutClose}>
                  <CloseIcon /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default AboutModal;
