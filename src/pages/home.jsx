import React from 'react';
import Hero from '../components/Hero';
import FeaturedCards from '../components/FeatureCards';
import HealthyMenus from '../components/HealthyMenus';
import WellnessSection from '../components/WellnessSection';
import Categories from '../components/Categories';
import NutrientBowls from '../components/NutrientBowls';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCards />
      <HealthyMenus />
      <WellnessSection />
      <Categories />
      <NutrientBowls />
    </div>
  );
};
export default Home;