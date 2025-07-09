// src/Pages/Home.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default Home;
