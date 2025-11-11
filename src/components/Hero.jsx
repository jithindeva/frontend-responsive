import React from 'react';
import '../App.css';
import heroBg from '../assets/hero-bg.jpg'; // your uploaded image

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <header className="hero-navbar">
          <h2 className="hero-logo">Panto</h2>
          <nav className="hero-nav">
            <a href="#furniture">Furniture</a>
            <a href="#shop">Shop</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="hero-cart">🛒</div>
        </header>

        <div className="hero-content">
          <h1>
            Make Your Interior More <br />
            <span>Minimalistic & Modern</span>
          </h1>
          <p>
            Turn your room with Panto into a lot more minimalist and modern with ease and speed.
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Search furniture" />
            <button>🔍</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
