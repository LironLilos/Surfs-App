import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import BeachCam from '../components/BeachCam';
import Categories from '../components/Categories';

function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <BeachCam />
    </main>
  );
}

export default HomePage;
