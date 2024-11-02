import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/hero-bowl.jpg"
          alt="Healthy bowl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fuel Your Body<br />
            With Healthy<br />
            Choices
          </h1>
          
          <button className="flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors w-fit">
            <span>Explore the menu</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;