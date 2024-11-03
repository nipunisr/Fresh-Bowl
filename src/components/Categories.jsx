import React from 'react';
import { ArrowRight } from 'lucide-react';
import pic from '../assets/pic.png';
const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative h-48">
      <img src={pic} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="flex items-center text-green-500 hover:text-green-600 transition-colors">
        <span className="mr-2">Learn more</span>
        <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const Categories = () => {
  const categories = [
    {
      title: "Berry Bliss Bowl",
      description: "A sweet blend of fresh strawberries, blueberries with granola.",
      image: "/berry-bowl.jpg"
    },
    {
      title: "Tropical Paradise Bowl",
      description: "A refreshing mix of mango, pineapple with coconut flakes.",
      image: "/tropical-bowl.jpg"
    },
    {
      title: "Banana Boost Bowl",
      description: "Creamy banana base topped with nuts and honey.",
      image: "/banana-bowl.jpg"
    },
    {
      title: "Mango Magic Bowl",
      description: "Fresh mango blend with passionfruit and chia seeds.",
      image: "/mango-bowl.jpg"
    },
    {
      title: "Cacao Dream Bowl",
      description: "Rich cacao smoothie base with nuts and coconut.",
      image: "/cacao-bowl.jpg"
    },
    {
      title: "Sunshine Citrus Bowl",
      description: "Citrus medley with orange, grapefruit and granola.",
      image: "/citrus-bowl.jpg"
    }
  ];

  return (
    <section className="py-16 bg-[#EDFFDA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">Best Categories</h2>
        <p className="text-gray-600 mb-8">We Have</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;