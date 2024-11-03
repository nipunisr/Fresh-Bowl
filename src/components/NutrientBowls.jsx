import React from 'react';
import { ArrowRight } from 'lucide-react';
import pic2 from "../assets/pic2.jpg";

const NutrientBowls = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="bg-green-800 rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Fuel Your Body<br />
              With Nutrient-Rich<br />
              Bowls
            </h2>
            <p className="text-white/80 mb-6">
              Indulge in a variety of fresh superfruit, açaí, pitaya, fresh 
              fruits, and healthy toppings that we carefully select to fuel 
              your energy.
            </p>
            <button className="flex items-center space-x-2 bg-white text-green-800 px-8 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
              <span>View our menu</span>
              <ArrowRight size={20} />
            </button>
          </div>

        
          <div className="relative rounded-2xl overflow-hidden h-96">
            <img
              src={pic2}
              alt="Green Energy Bowl"
              className="w-full  h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40">
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Green Energy Bowl
                </h3>
                <p className="text-white/80">
                  Smooth, rich and nutritious for a refreshing start to your 
                  most powerful day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutrientBowls;