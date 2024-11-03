import React from 'react';
import pic4 from "../assets/pic4.jpg";
const WellnessSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src= {pic4}
            alt="Golden Superfruit Delight Bowl"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
            <div className="h-full flex flex-col justify-center p-12">
              <h2 className="text-white text-4xl font-bold mb-4">
                Your Wellness.<br />
                Our Passion.
              </h2>
              <h3 className="text-white/90 text-2xl mb-6">
                Golden Superfruit Delight Bowl
              </h3>
              <button className="bg-white text-green-800 px-8 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>
          </div>

          
          <div className="absolute inset-0">
            {[
              { top: '30%', left: '40%' },
              { top: '50%', left: '60%' },
              { top: '40%', left: '70%' },
              { top: '60%', left: '30%' },
              { top: '70%', left: '50%' }
            ].map((position, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-yellow-400 rounded-full cursor-pointer animate-pulse"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;