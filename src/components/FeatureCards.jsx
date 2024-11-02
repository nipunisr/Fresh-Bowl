import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedCards = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: "Bursting with Freshness",
      image: "/fresh-bowl-1.jpg",
      description: "Experience the explosion of today's fresh cut fruits and premium toppings, ready to fuel your journey!"
    },
    {
      title: "Fuel Your Day",
      image: "/smoothie-bowl-2.jpg",
      description: "Fresh, Delicious Smoothie Bowls! Experience the perfect blend of fresh fruits topped with our signature ingredients."
    },
    {
      title: "Green Energy Bowl",
      image: "/green-bowl.jpg",
      description: "Smooth, rich and nutritious for a refreshing start to your most powerful day."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Card */}
          <div className="relative rounded-2xl overflow-hidden h-96">
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-white/80">
                  {slides[activeSlide].description}
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-8 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Promotional Card */}
          <div className="bg-green-800 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-white text-2xl font-bold mb-4">
              Get 10% Off This Week!
            </h3>
            <p className="text-white/80 mb-6">
              Experience our signature blend of fresh ingredients topped with premium 
              selections. Use code FRESH10 at checkout!
            </p>
            <button className="bg-white text-green-800 px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;