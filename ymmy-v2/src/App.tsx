import { useState, useEffect } from 'react';
import type { Theme } from './types';

import './styles/scss/global.scss';

import bgLarge from './assets/AVIF/bg.avif';
import bgMedium from './assets/AVIF/bgMedium.avif';
import bgSmall from './assets/AVIF/bgSmall.avif';
import edLarge from './assets/AVIF/ed.avif';
import edMedium from './assets/AVIF/edMedium.avif';
import edSmall from './assets/AVIF/edSmall.avif';
import minEdLarge from './assets/AVIF/minimalisticBg.avif';
import minEdMedium from './assets/AVIF/minimalisticBgMedium.avif';
import minEdSmall from './assets/AVIF/minimalisticBgSmall.avif';

import Sakura from './components/Sakura';
import AboutSection from './components/AboutSection';
import StartupList from './components/StartupList';
import Projects from './components/Projects';
import Education from './components/Education';
import LinkedInAssessments from './components/LinkedInAssessments';
import Skills from './components/Skills';
import Footer from './components/Footer';

function getAspectBg(isJapan: boolean): { hero: string | null; ed: string } {
  const ratio = window.innerWidth / window.innerHeight;
  if (isJapan) {
    return {
      hero: ratio >= 1.5 ? bgLarge : ratio >= 1 ? bgMedium : bgSmall,
      ed: ratio >= 1.5 ? edLarge : ratio >= 1 ? edMedium : edSmall,
    };
  }
  return {
    hero: null,
    ed: ratio >= 1.5 ? minEdLarge : ratio >= 1 ? minEdMedium : minEdSmall,
  };
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('japan');
  const [heroBg, setHeroBg] = useState<string | null>(null);
  const [edBg, setEdBg] = useState<string>('');

  const switchTheme = () =>
    setTheme((t) => (t === 'japan' ? 'minimal' : 'japan'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const isJapan = theme === 'japan';
    const update = () => {
      const { hero, ed } = getAspectBg(isJapan);
      setHeroBg(hero);
      setEdBg(ed);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [theme]);

  const contentStyle = edBg
    ? { backgroundImage: `url(${edBg})` }
    : undefined;

  return (
    <div id='main_container'>
      <Sakura bg={heroBg} theme={theme} switchTheme={switchTheme} />
      <div className='content-wrapper' style={contentStyle}>
        <AboutSection />
        <StartupList />
        <Projects />
        <Education />
        <LinkedInAssessments />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
