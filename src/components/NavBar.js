import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import '../styles/css/entry.css';
import '../styles/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import audioFile from '../assets/png&jpg/bg_music.mp3';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AboutModal from './AboutModal';

export default function NavBar({ main, theme, switchTheme }) {
  const [isPaused, setIsPaused] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggle = (action) => {
    let audioElement = document.getElementById('backgroundMusic');
    if (audioElement) {
      if (action === 'play') audioElement.play();
      else audioElement.pause();
      setIsPaused(!isPaused);
    }
  };

  const handleAboutOpen = () => {
    setAboutOpen(true);
  };
  const handleAboutClose = () => setAboutOpen(false);

  return (
    <>
      <Navbar id='nav' collapseOnSelect expand='md'>
        <Navbar.Toggle />
        <Navbar.Brand href='https://ymmy1.github.io/' className='navbar-brand'>
          Portfolio
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className='navbar-nav ms-auto'>
            <Nav.Item className='nav-item ml-auto'>
              {main &&
                (theme ? (
                  <button
                    className='minimalistic_button'
                    onClick={() => switchTheme()}
                  >
                    <span>Minimalistic </span>
                  </button>
                ) : (
                  <button
                    className='japan_button'
                    onClick={() => switchTheme()}
                  >
                    <span>Japan Theme</span>
                  </button>
                ))}
            </Nav.Item>

            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link href='#education'>Education</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link href='#skills'>Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#projects'>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => handleAboutOpen()}>About Me</Nav.Item>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link
                className='nav-social-link'
                href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon fontSize='medium' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {main && (
                <>
                  <audio id='backgroundMusic' autoPlay>
                    <source src={audioFile} type='audio/mpeg' />
                    Your browser does not support the audio element.
                  </audio>
                  {isPaused ? (
                    <VolumeOffIcon
                      fontSize='medium'
                      onClick={() => toggle('play')}
                    />
                  ) : (
                    <VolumeUpIcon
                      fontSize='medium'
                      onClick={() => toggle('pause')}
                    />
                  )}
                </>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AboutModal aboutOpen={aboutOpen} handleAboutClose={handleAboutClose} />
    </>
  );
}
