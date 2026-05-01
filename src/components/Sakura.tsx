import { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import NavBar from './NavBar';
import type { Theme } from '../types';
import '../styles/scss/hero.scss';

import rocksImg from '../assets/AVIF/rocks.avif';
import resume from '../assets/Resumes/Oleg_Nosyrev_Resume.pdf';

interface SakuraProps {
  bg: string | null;
  theme: Theme;
  switchTheme: () => void;
}

interface Leaf {
  el: HTMLDivElement;
  x: number;
  y: number;
  z: number;
  rotation: { axis: string; value: number; speed: number; x: number };
  xSpeedVariation: number;
  ySpeed: number;
}

interface WindOptions {
  magnitude: number;
  maxSpeed: number;
  duration: number;
  start: number;
  speed: (t: number, y: number) => number;
}

export default function Sakura({ bg, theme, switchTheme }: SakuraProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<Leaf[]>([]);
  const timerRef = useRef(0);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ width: 0, height: 0 });

  const windRef = useRef<WindOptions>({
    magnitude: 1.2,
    maxSpeed: 12,
    duration: 300,
    start: 0,
    speed: () => 0,
  });

  useEffect(() => {
    const viewport = viewportRef.current;
    const world = worldRef.current;
    if (!viewport || !world) return;

    const updateSize = () => {
      sizeRef.current = {
        width: viewport.offsetWidth,
        height: viewport.offsetHeight,
      };
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    const makeWindSpeed =
      (magnitude: number, duration: number, height: number) =>
      (t: number, y: number) => {
        const a = ((magnitude / 2) * (height - (2 * y) / 3)) / height;
        return (
          a * Math.sin(((2 * Math.PI) / duration) * t + (3 * Math.PI) / 2) + a
        );
      };

    const initWind = () => {
      const { height } = sizeRef.current;
      windRef.current.magnitude = Math.random() * windRef.current.maxSpeed;
      windRef.current.duration =
        windRef.current.magnitude * 50 + (Math.random() * 20 - 10);
      windRef.current.start = timerRef.current;
      windRef.current.speed = makeWindSpeed(
        windRef.current.magnitude,
        windRef.current.duration,
        height,
      );
    };
    initWind();

    const resetLeaf = (leaf: Leaf) => {
      const { width, height } = sizeRef.current;
      leaf.x = width * 2 - Math.random() * width * 1.75;
      leaf.y = -10;
      leaf.z = Math.random() * 200;
      if (leaf.x > width) {
        leaf.x = width + 10;
        leaf.y = (Math.random() * height) / 2;
      }
      if (timerRef.current === 0) leaf.y = Math.random() * height;

      leaf.rotation.speed = Math.random() * 10;
      const rnd = Math.random();
      if (rnd > 0.5) {
        leaf.rotation.axis = 'X';
      } else if (rnd > 0.25) {
        leaf.rotation.axis = 'Y';
        leaf.rotation.x = Math.random() * 180 + 90;
      } else {
        leaf.rotation.axis = 'Z';
        leaf.rotation.x = Math.random() * 360 - 180;
        leaf.rotation.speed = Math.random() * 3;
      }
      leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
      leaf.ySpeed = Math.random() + 1.5;
    };

    const NUM_LEAVES = 20;
    for (let i = 0; i < NUM_LEAVES; i++) {
      const el = document.createElement('div');
      const leaf: Leaf = {
        el,
        x: 0,
        y: 0,
        z: 0,
        rotation: { axis: 'X', value: 0, speed: 0, x: 0 },
        xSpeedVariation: 0,
        ySpeed: 0,
      };
      resetLeaf(leaf);
      leavesRef.current.push(leaf);
      world.appendChild(el);
    }
    world.classList.add('leaf-scene');

    const tick = () => {
      const { height } = sizeRef.current;
      const wind = windRef.current;
      const t = timerRef.current;

      // update wind
      if (t === 0 || t > wind.start + wind.duration) {
        wind.magnitude = Math.random() * wind.maxSpeed;
        wind.duration = wind.magnitude * 50 + (Math.random() * 20 - 10);
        wind.start = t;
        wind.speed = makeWindSpeed(wind.magnitude, wind.duration, height);
      }

      for (const leaf of leavesRef.current) {
        const ws = wind.speed(t - wind.start, leaf.y);
        leaf.x -= ws + leaf.xSpeedVariation;
        leaf.y += leaf.ySpeed;
        leaf.rotation.value += leaf.rotation.speed;

        let transform =
          `translateX(${leaf.x}px) translateY(${leaf.y}px) translateZ(${leaf.z}px) ` +
          `rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;
        if (leaf.rotation.axis !== 'X')
          transform += ` rotateX(${leaf.rotation.x}deg)`;

        leaf.el.style.transform = transform;

        const { width } = sizeRef.current;
        if (leaf.x < -10 || leaf.y > sizeRef.current.height + 10)
          resetLeaf(leaf);
        void width;
      }

      timerRef.current++;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', updateSize);
      leavesRef.current.forEach((l) => l.el.remove());
      leavesRef.current = [];
      timerRef.current = 0;
    };
  }, []);

  const isJapan = theme === 'japan';

  return (
    <Parallax strength={200} bgImage={bg ?? undefined}>
      <div
        ref={viewportRef}
        className='hero'
        data-theme-bg={isJapan ? 'japan' : 'minimal'}
      >
        <div
          ref={worldRef}
          className='leaf-world'
          style={{ visibility: isJapan ? 'visible' : 'hidden' }}
        />

        <NavBar showThemeToggle theme={theme} switchTheme={switchTheme} />

        <div className='hero-name'>
          <h1 className='hero-name__text'>Oleg Nosyrev</h1>
        </div>

        <div className='hero-footer'>
          <p className='hero-footer__title'>
            Software Engineer — Frontend-Leaning Full Stack
          </p>
          <a
            className='hero-footer__resume'
            href={resume}
            target='_blank'
            rel='noreferrer'
          >
            ↓ Resume
          </a>
        </div>

        {isJapan && (
          <img className='hero-rocks' src={rocksImg} alt='' aria-hidden />
        )}

        <div className='scroll-indicator' aria-hidden />
      </div>
    </Parallax>
  );
}
