import React from 'react';
import vector from '../assets/vector.png';

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-11">
        
        {/* Logo and Address */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-green-200">FRESHBOWL</h2>
          <p className="text-sm text-green-100">
            FreshBowl<br />
            456 Orchard Street,<br />
            Greenwood
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-green-100 border border-green-100 rounded-full px-3 py-2 hover:bg-green-800 transition">
              Facebook
            </a>
            <a href="#" className="text-green-100 border border-green-100 rounded-full px-3 py-2 hover:bg-green-800 transition">
              Youtube
            </a>
            <a href="#" className="text-green-100 border border-green-100 rounded-full px-3 py-2 hover:bg-green-800 transition">
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right text-green-100">
          <div className="border-t border-green-600 w-full my-4"></div>
          <p className="text-xs">© 2024 Safenax (pvt) Ltd | This site is a demo project for testing purposes only.</p>
        </div>
        </div>
        
        {/* Quick Links */}
        <div className="flex justify-center px-11 md:justify-start space-x-16 text-green-100">
          <ul className="space-y-6 ">
            <li className="flex space-x-4"><img src={vector}  /> <a href="#" className="hover:text-green-300">Help</a></li>
            <li className="flex space-x-4"><img src={vector} /><a href="#" className="hover:text-green-300">Shop</a></li>
            <li className="flex space-x-4"><img src={vector} /><a href="#" className="hover:text-green-300">Support</a></li>
            <li className="flex space-x-4"><img src={vector} /><a href="#" className="hover:text-green-300">Policies</a></li>
          </ul>
          <ul className="space-y-6">
            <li className="flex space-x-4"><img src={vector} /><a href="#" className="hover:text-green-300">Home</a></li>
            <li className="flex space-x-4"><img src={vector}  /><a href="#" className="hover:text-green-300">Menu</a></li>
            <li className="flex space-x-4"><img src={vector}  /><a href="#" className="hover:text-green-300">About</a></li>
            <li className="flex space-x-4"><img src={vector}  /><a href="#" className="hover:text-green-300">Recipes</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
