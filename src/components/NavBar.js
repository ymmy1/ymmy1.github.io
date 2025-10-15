import React from 'react';
import '../styles/css/entry.css';
import '../styles/css/NavBar.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function NavBar({ main, theme, switchTheme }) {

  return (
    <nav id='nav'>
      <a href='https://ymmy1.github.io/' className='navbar-brand'>
        Portfolio
      </a>

      <div className='nav-items'>
        <div className='nav-item'>
          {main &&
            (theme ? (
              <button className='minimalistic_button' onClick={() => switchTheme()}>
                <span>Minimalistic </span>
              </button>
            ) : (
              <button className='japan_button' onClick={() => switchTheme()}>
                <span>Japan Theme</span>
              </button>
            ))}
        </div>

        <div className='nav-item'>
          <a href='#education'>Education</a>
        </div>
        <div className='nav-item'>
          <a href='#skills'>Skills</a>
        </div>
        <div className='nav-item'>
          <a href='#projects'>Projects</a>
        </div>
        <div className='nav-item'>
          <a
            className='nav-social-link'
            href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon fontSize='medium' />
          </a>
        </div>
      </div>
    </nav>
  );
}
