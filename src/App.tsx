import { useState, useEffect, useRef } from 'react';
import type { Theme } from './types';

import './styles/scss/global.scss';

import bgLarge from './assets/AVIF/bg.avif';
import bgMedium from './assets/AVIF/bgMedium.avif';
import bgSmall from './assets/AVIF/bgSmall.avif';
import edLarge from './assets/AVIF/ed.avif';
import edMedium from './assets/AVIF/edMedium.avif';
import edSmall from './assets/AVIF/edSmall.avif';

import Sakura from './components/Sakura';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Education from './components/Education';
import LinkedInAssessments from './components/LinkedInAssessments';
import Skills from './components/Skills';
import Footer from './components/Footer';

function getJapanBg(): { hero: string; ed: string } {
  const ratio = window.innerWidth / window.innerHeight;
  return {
    hero: ratio >= 1.5 ? bgLarge : ratio >= 1 ? bgMedium : bgSmall,
    ed:   ratio >= 1.5 ? edLarge : ratio >= 1 ? edMedium : edSmall,
  };
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('minimal');
  const [heroBg, setHeroBg] = useState<string | null>(null);
  const [edBg, setEdBg] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchTheme = () => {
    if (fading) return;
    setFading(true);
    fadeTimer.current = setTimeout(() => {
      setTheme((t) => (t === 'japan' ? 'minimal' : 'japan'));
      fadeTimer.current = setTimeout(() => setFading(false), 50);
    }, 260);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (theme !== 'japan') {
      setHeroBg(null);
      setEdBg(null);
      return;
    }

    const update = () => {
      const { hero, ed } = getJapanBg();
      setHeroBg(hero);
      setEdBg(ed);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [theme]);

  const contentStyle = edBg ? { backgroundImage: `url(${edBg})` } : undefined;

  return (
    <div id='main_container'>
      <div className={`theme-fade${fading ? ' active' : ''}`} aria-hidden />
      <Sakura bg={heroBg} theme={theme} switchTheme={switchTheme} />
      <div className='content-wrapper' style={contentStyle}>
        <AboutSection />
        <Education />
        <Projects />
        <LinkedInAssessments />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
