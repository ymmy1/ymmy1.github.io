import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import '../styles/css/entry.css';
import '../styles/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import audioFile from '../assets/png&jpg/bg_music.mp3';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function NavBar(main) {
  const [isPaused, setIsPaused] = useState(true);
  const [isMain] = useState(main.main);

  const toggle = (action) => {
    let audioElement = document.getElementById('backgroundMusic');
    if (audioElement) {
      if (action === 'play') audioElement.play();
      else audioElement.pause();
      setIsPaused(!isPaused);
    }
  };

  return (
    <>
      <Navbar id='nav' collapseOnSelect expand='md'>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Brand
            href='https://ymmy1.github.io/'
            className='navbar-brand'
          >
            Portfolio
          </Navbar.Brand>
          <Nav className='navbar-nav ms-auto'>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link href='#education'>Education</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link href='#skills'>Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#projects'>Projects</Nav.Link>
            </Nav.Item>
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
              {isMain && (
                <audio id='backgroundMusic'>
                  <source src={audioFile} type='audio/mpeg' autoPlay />
                  Your browser does not support the audio element.
                </audio>
              )}
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
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}