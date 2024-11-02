import React from "react";
import Categories from "../components/Categories";

const Menu = () => {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Categories />
          </div>
        </div>
      </div>
    );
  };
  export default Menu;