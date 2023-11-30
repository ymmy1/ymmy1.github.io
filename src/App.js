import React, { useState, useEffect } from 'react';
import './styles/css/App.css';

// main Bg
import bgLarge from './assets/AVIF/bg.avif';
import bgMedium from './assets/AVIF/bgMedium.avif';
import bgSmall from './assets/AVIF/bgSmall.avif';

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
    const handleHashChange = () => {
      // Check if there's a fragment identifier in the URL
      if (window.location.hash) {
        // Get the target element using the fragment identifier
        const targetElement = document.querySelector(window.location.hash);

        // Scroll to the target element if it exists
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Attach the event listener for hash changes

    // Check on component mount
    handleHashChange();

    // Initial call
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <div id='main_container'>
      <Section1 bg={bgImage} />
      <Section3 />
      <Section2 bg={edImage} />
      <Footer />
    </div>
  );
}

export default App;
