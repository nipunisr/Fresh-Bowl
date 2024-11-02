import React from 'react';
import Hero from '../components/Hero';
import FeaturedCards from '../components/FeatureCards';
import HealthyMenus from '../components/HealthyMenus';
import WellnessSection from '../components/WellnessSection';
import Categories from '../components/Categories';
import NutrientBowls from '../components/NutrientBowls';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>

      <Navbar/>
      <Hero />
      <FeaturedCards />
      <HealthyMenus />
      <WellnessSection />
      <Categories />
      <NutrientBowls />
      <Footer />
    </div>
  );
};
export default Home;