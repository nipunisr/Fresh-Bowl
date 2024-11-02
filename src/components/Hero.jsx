import React from 'react';
import { ArrowRight } from 'lucide-react';
import hero from "../assets/hero.png"
import herobg from "../assets/herobg.png"
import heroContImg from "../assets/heroContImg.png"
const Hero = () => {
  return (
    <div className="relative pt-[100px] h-screen">
    <div className="absolute inset-0 ">
      <img
        src={herobg}
        alt="Healthy bowl"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 "></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full" style={{ backgroundImage: `url(${heroContImg})`, 
  backgroundPosition: 'center', 
       backgroundSize: 'cover', 
       borderRadius: '15px',
       overflow: 'hidden', 
       position: 'relative'  }}>
  <div style={{ 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the rgba value to change the opacity
  }}></div>
  
      <div className="flex flex-col justify-center h-full "  style={{ position: 'relative', zIndex: 1 }} >
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

export default Hero;
