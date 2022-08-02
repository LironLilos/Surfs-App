import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <h3>Let's go</h3>
      <h1>surfing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <Link to={'/products'}>
        <button className="btn">Shop Now</button>
      </Link>
    </section>
  );
}

export default Hero;
