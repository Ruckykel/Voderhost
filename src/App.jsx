// eslint-disable-next-line no-unused-vars
import React,  { useEffect } from 'react';
import Home from './components/Home/Home'
import Services from './components/Services/Services';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/ContactUs/Contact';
import About from './components/AboutUs/About';
const trackPageView = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-LLNKZEJCBP', {
      page_path: url,
    });
  }
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;