// src/ScrollToSection.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1); // removes the "/" from "/about"
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay for reliable scroll
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default ScrollToSection;
