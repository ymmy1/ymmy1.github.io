import React, { useState, useEffect } from 'react';
import './styles/css/App.css';

// main Bg
import bgLarge from './assets/AVIF/bg.avif';
import bgMedium from './assets/AVIF/bgMedium.avif';
import bgSmall from './assets/AVIF/bgSmall.avif';

// minimalistic Bg
import minBgLarge from './assets/AVIF/minimalisticBg.avif';
import minBgMedium from './assets/AVIF/minimalisticBgMedium.avif';
import minBgSmall from './assets/AVIF/minimalisticBgSmall.avif';

// education Bg
import edLarge from './assets/AVIF/ed.avif';
import edMedium from './assets/AVIF/edMedium.avif';
import edSmall from './assets/AVIF/edSmall.avif';

import Footer from './components/Footer.js';
import Section1 from './components/Sakura.js';
import Section2 from './components/Education.js';
import Section3 from './components/Projects.js';

function App() {
  const [bgImage, setBgImage] = useState(bgSmall); // Default image
  const [theme, setTheme] = useState(false); // Default image
  const [edImage, setEdImage] = useState(edSmall); // Default image

  const switchTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      if (theme) {
        if (aspectRatio >= 1.5) {
          // Wide aspect ratio, load large image
          setBgImage(bgLarge);
          setEdImage(edLarge);
        } else if (aspectRatio >= 1) {
          // Standard aspect ratio, load medium image
          setBgImage(bgMedium);
          setEdImage(edMedium);
        } else {
          // Tall aspect ratio, load small image
          setBgImage(bgSmall);
          setEdImage(edSmall);
        }
      } else {
        setBgImage('none');
        if (aspectRatio >= 1.5) setEdImage(minBgLarge);
        else if (aspectRatio >= 1) setEdImage(minBgMedium);
        else setEdImage(minBgSmall);
      }
    };
    const handleHashChange = () => {
      // Check if there's a fragment identifier in the URL
      if (window.location.hash) {
        // Get the target element using the fragment identifier
        const targetElement = document.querySelector(window.location.hash);
        console.log(targetElement);

        // Scroll to the target element if it exists
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 2000);
        }
      }
    };

    handleHashChange();
    handleResize();

    // Attach event listener for window resize
    // window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);
  return (
    <div id='main_container'>
      <Section1 bg={bgImage} theme={theme} switchTheme={switchTheme} />
      <Section3 />
      <Section2 bg={edImage} theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
