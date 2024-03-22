import React from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import '../styles/css/about.css';

function AboutModal({ aboutOpen, handleAboutClose, theme }) {
  return (
    <Modal
      open={aboutOpen}
      onClose={handleAboutClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
    >
      <Fade in={aboutOpen}>
        <div className='about-modal-box'>
          <h1>About Me</h1>
          <p>
            My name is Oleg Nosyrev, I also go by Logan Nosyrev. Logan as my
            American first name. Please refer to me whatever is easier for you.
          </p>
          <p>
            I am a self-taught Front End Developer with{' '}
            <strong>4+ of professional</strong> and{' '}
            <strong>9+ years of personal development</strong> experience. I
            accrued certificates from Harvard and University of Washington and
            my first degree is an Associate's Degree in Culinary Arts.
          </p>
          <p>
            While my culinary education may not seem immediately relevant, it
            has instilled in me a strong work ethic, attention to detail, and a
            passion for creative problem-solving—qualities that I believe are
            transferable and valuable in software engineering.
          </p>
          <p>
            I'm a world class gymnast and coach with 20+ years of experience.
            Some of my greates achievements are included in my resume and I'm
            happy to talk more about it.
          </p>
          <p>
            I'm highly motivated, attention-to-detail-focused, organized, a
            quick learner and a great communicator in both personal and
            professional settings.
          </p>
          <p>
            It takes patience and motivation to guide yourself through the
            self-learning process.
          </p>
          <p>
            Languages that I speak: English, Russian, Lithuanian and Japanese
            (beginner).
          </p>
          <button
            className={`button-orange ${theme ? '' : 'button-gray'}`}
            onClick={handleAboutClose}
          >
            Close
          </button>
        </div>
      </Fade>
    </Modal>
  );
}

export default AboutModal;
