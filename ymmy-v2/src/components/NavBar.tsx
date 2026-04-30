import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { Theme } from '../types';
import '../styles/scss/navbar.scss';

interface NavBarProps {
  showThemeToggle?: boolean;
  theme?: Theme;
  switchTheme?: () => void;
}

export default function NavBar({ showThemeToggle, theme, switchTheme }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <nav className='navbar'>
      <a href='#' className='navbar__brand'>Portfolio</a>

      <button
        className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label='Toggle menu'
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {showThemeToggle && switchTheme && (
          <li>
            <button className='navbar__theme-btn' onClick={switchTheme}>
              {theme === 'japan' ? 'Minimal' : 'Japan'}
            </button>
          </li>
        )}
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              className='navbar__link'
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            className='navbar__social'
            href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
