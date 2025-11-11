import React from 'react';
import './App.css';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import BestSelling from './components/BestSelling';
import Experience from './components/Experience';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'; // ✅ import

function App() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <BestSelling />
      <Experience />
      <Materials />
      <Testimonials />
      <Footer />  {/* ✅ add this */}
    </>
  );
}

export default App;
