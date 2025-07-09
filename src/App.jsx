
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ScrollToSection from './Components/ScrollToSection';


function App() {
  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
