import { useRef } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/scss/education.scss';

import harvardLogo from '../assets/AVIF/h-logo-sm.avif';
import uwLogo from '../assets/AVIF/uw-logo-sm.avif';
import CS50 from '../assets/AVIF/CS50.avif';
import CS50W from '../assets/AVIF/CS50W.avif';
import UWC from '../assets/AVIF/UW_certificate.avif';
import MPA from '../assets/png&jpg/MPA-Internship-Completion-Certificate-Oleg-1.png';
import FE from '../assets/png&jpg/FrontendExpert_Certificate.pdf';

const institutions = [
  {
    logo: harvardLogo,
    name: 'Harvard University',
    desc: 'CS50x & CS50W — Computer Science & Web',
  },
  {
    logo: uwLogo,
    name: 'University of Washington',
    desc: 'Professional & Continuing Education',
  },
];

const certs = [
  { logo: harvardLogo, img: CS50, alt: 'CS50 certificate', href: CS50 },
  { logo: uwLogo, img: UWC, alt: 'UW certificate', href: UWC },
  { logo: harvardLogo, img: CS50W, alt: 'CS50W certificate', href: CS50W },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section id='education' className='education-section'>
      <h1 className='section-title'>Education</h1>
      <div className='education-layout fade-bottom' ref={ref}>
        <div className='education-institutions'>
          {institutions.map(({ logo, name, desc }) => (
            <div key={name} className='institution-card'>
              <img className='institution-card__logo' src={logo} alt={name} />
              <div className='institution-card__info'>
                <span className='institution-card__name'>{name}</span>
                <span className='institution-card__desc'>{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='education-certs'>
          <div className='cert-grid'>
            {certs.map(({ logo, img, alt, href }) => (
              <a
                key={alt}
                className='cert-card'
                href={href}
                target='_blank'
                rel='noreferrer'
                aria-label={alt}
              >
                <img className='cert-card__logo' src={logo} alt='' aria-hidden />
                <img className='cert-card__img' src={img} alt={alt} />
              </a>
            ))}
          </div>
          <div className='education-docs'>
            <a className='doc-btn' href={FE} target='_blank' rel='noreferrer'>
              <DescriptionIcon /> Frontend Expert
            </a>
            <a className='doc-btn' href={MPA} target='_blank' rel='noreferrer'>
              <DescriptionIcon /> Internship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
