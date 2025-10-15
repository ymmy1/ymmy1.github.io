import React, { useEffect } from 'react';

import '../styles/css/education.css';

import h from '../assets/AVIF/h-logo-sm.avif';
import harvard from '../assets/AVIF/h-logo.avif';
import u from '../assets/AVIF/uw-logo-sm.avif';
import uw from '../assets/AVIF/uw-logo.avif';

import CS50 from '../assets/AVIF/CS50.avif';
import CS50W from '../assets/AVIF/CS50W.avif';
import MPA from '../assets/png&jpg/MPA-Internship-Completion-Certificate-Oleg-1.png';
import FE from '../assets/png&jpg/FrontendExpert_Certificate.pdf';
import UWC from '../assets/AVIF/UW_certificate.avif';

import DescriptionIcon from '@mui/icons-material/Description';

export default function Education(props) {
  const { bg } = props;
  const reveal = () => {
    const reveals = document.querySelectorAll('.boxes');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  return (
    <section id='education' className='section_2'>
      <img id='ed_img' src={bg} alt='candleLight' />
      <div className='boxes fade-bottom'>
        <div className='left-box'>
          <h1>Education</h1>
          <div className='img-container fade-target'>
            <img src={harvard} alt='harvard title' />
            <img className='uw_title' src={uw} alt='uw title' />
          </div>
        </div>
        <div className='right-box fade-target'>
          <div className='img-container'>
            <a
              className='img_certificate left-cert'
              href={CS50}
              target='_blank'
              rel='noreferrer'
            >
              <img className='smallLogo' src={h} alt='harvard logo' />
              <img className='certificate' src={CS50} alt='CS50 certificate' />
            </a>
            <a
              className='img_certificate mid-cert'
              href={UWC}
              target='_blank'
              rel='noreferrer'
            >
              <img className='smallLogo' src={u} alt='UW logo' />
              <img className='certificate' src={UWC} alt='UW certificate' />
            </a>
            <a
              className='img_certificate right-cert'
              href={CS50W}
              target='_blank'
              rel='noreferrer'
            >
              <img className='smallLogo' src={h} alt='harvard logo' />
              <img
                className='certificate'
                src={CS50W}
                alt='CS50 Web certificate'
              />
            </a>
          </div>
          <div className='button-section'>
            <a
              href={FE}
              className='button-main'
              target='_blank'
              rel='noreferrer'
            >
              <DescriptionIcon fontSize='medium' color='#fff' /> Frontend Expert
            </a>
            <a
              href={MPA}
              className='button-main'
              target='_blank'
              rel='noreferrer'
            >
              <DescriptionIcon fontSize='medium' color='#fff' /> Internship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
