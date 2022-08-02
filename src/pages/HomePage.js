import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Banner from '../components/Banner';
import BeachCam from '../components/BeachCam';
import Categories from '../components/Categories';
import Welcome from '../components/Welcome';

function HomePage() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <BeachCam />
    </main>
  );
}

export default HomePage;
