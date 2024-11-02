import React from 'react';
import { ArrowRight } from 'lucide-react';

const MenuCard = ({ title, price, image }) => (
  <div className="group relative overflow-hidden rounded-xl">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-green-400 font-semibold">${price}</p>
        </div>
        <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="text-green-500" size={20} />
        </button>
      </div>
    </div>
  </div>
);

const HealthyMenus = () => {
  const menus = [
    {
      title: "Berry Bliss Bowl",
      price: "12.99",
      image: "/berry-bowl.jpg"
    },
    {
      title: "Detox Fuel Bowl",
      price: "13.99",
      image: "/detox-bowl.jpg"
    },
    {
      title: "Cosmic Dream Bowl",
      price: "14.99",
      image: "/cosmic-bowl.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Healthy Menus</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menus.map((menu, index) => (
            <MenuCard key={index} {...menu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyMenus;