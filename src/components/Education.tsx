import { useRef } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/scss/education.scss';

import harvardLogo from '../assets/AVIF/h-logo-sm.avif';
import uwLogo from '../assets/AVIF/uw-logo-sm.avif';
import algoexpertLogo from '../assets/AVIF/algoexpert.avif';
import CS50 from '../assets/AVIF/CS50.avif';
import CS50W from '../assets/AVIF/CS50W.avif';
import UWC from '../assets/AVIF/UW_certificate.avif';
import FECert from '../assets/AVIF/frontend_expert_certificate.avif';
import MPA from '../assets/png&jpg/MPA-Internship-Completion-Certificate-Oleg-1.png';

const institutions = [
  {
    logo: algoexpertLogo,
    name: 'AlgoExpert',
    program: 'FrontendExpert',
    accent: '#00b8a9',
    certBorder: true,
    cert: { img: FECert, alt: 'FrontendExpert certificate', href: FECert },
  },
  {
    logo: harvardLogo,
    name: 'Harvard University',
    program: 'CS50x',
    accent: '#a51c30',
    cert: { img: CS50, alt: 'CS50 certificate', href: CS50 },
  },
  {
    logo: harvardLogo,
    name: 'Harvard University',
    program: 'CS50W',
    accent: '#a51c30',
    cert: { img: CS50W, alt: 'CS50W certificate', href: CS50W },
  },
  {
    logo: uwLogo,
    name: 'Univ. of Washington',
    program: 'Professional Education',
    accent: '#4b2e83',
    cert: { img: UWC, alt: 'UW certificate', href: UWC },
  },
];

const otherCreds = [{ label: 'Internship', href: MPA }];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section id='education' className='education-section'>
      <h1 className='section-title'>Education</h1>

      <div className='edu-wrap fade-bottom' ref={ref}>
        <div className='edu-grid'>
          {institutions.map(
            ({ logo, name, program, accent, certBorder, cert }) => (
              <a
                key={`${name}-${program}`}
                className={`edu-card${certBorder ? ' edu-card--cert-border' : ''}`}
                href={cert.href}
                target='_blank'
                rel='noreferrer'
                aria-label={`Open ${cert.alt}`}
                style={{ '--card-accent': accent } as React.CSSProperties}
              >
                {certBorder ? (
                  <div className='edu-card__img-frame'>
                    <img
                      style={{ height: 253 }}
                      className='edu-card__img'
                      src={cert.img}
                      alt={cert.alt}
                    />
                  </div>
                ) : (
                  <img
                    className='edu-card__img'
                    src={cert.img}
                    alt={cert.alt}
                  />
                )}

                <div className='edu-card__glass'>
                  <img className='edu-card__logo' src={logo} alt={name} />
                  <div className='edu-card__info'>
                    <span className='edu-card__program'>{program}</span>
                    <span className='edu-card__name'>{name}</span>
                  </div>
                </div>
              </a>
            ),
          )}
        </div>

        <div className='edu-other'>
          {otherCreds.map(({ label, href }) => (
            <a
              key={label}
              className='edu-other__btn'
              href={href}
              target='_blank'
              rel='noreferrer'
            >
              <DescriptionIcon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
