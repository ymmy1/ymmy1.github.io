import React, { useState, useEffect } from 'react';

// main Bg
import bgLarge from './assets/AVIF/bg.avif';
import bgMedium from './assets/AVIF/bgMedium.avif';
import bgSmall from './assets/AVIF/bgSmall.avif';

// education Bg
import edLarge from './assets/AVIF/ed.avif';
import edMedium from './assets/AVIF/edMedium.avif';
import edSmall from './assets/AVIF/edSmall.avif';

import './styles/css/App.css';
import Footer from './components/Footer.js';
import Section1 from './components/Sakura.js';
import Section2 from './components/Education.js';
import Section3 from './components/Skills.js';
import Section4 from './components/Projects.js';

function App() {
  const [bgImage, setBgImage] = useState(bgSmall); // Default image
  const [edImage, setEdImage] = useState(edSmall); // Default image

  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;

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
    };

    // Initial call
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div id='main_container'>
      <Section1 bg={bgImage} />
      <Section2 bg={edImage} />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
