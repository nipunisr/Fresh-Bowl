import React from 'react';
import vector from '../assets/Vector.png';

const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center max-w-6xl p-8 px-4 py-12 mx-auto text-white bg-darkGreen sm:px-6 lg:px-8 md:px-8 rounded-2xl ">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-11 ">
        
       
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
          <h2 className="text-3xl font-bold text-green-200">FRESHBOWL</h2>
          <p className="text-sm text-green-100">
            FreshBowl<br />
            456 Orchard Street,<br />
            Greenwood
          </p>
          <div className="flex space-x-4">
            <a href="#" className="px-3 py-2 text-green-100 transition border border-green-100 rounded-full hover:bg-green-800">
              Facebook
            </a>
            <a href="#" className="px-3 py-2 text-green-100 transition border border-green-100 rounded-full hover:bg-green-800">
              Youtube
            </a>
            <a href="#" className="px-3 py-2 text-green-100 transition border border-green-100 rounded-full hover:bg-green-800">
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center text-center text-green-100 md:items-end md:text-right">
          <div className="w-full px-4 mx-auto my-4 border-t border-green-600 sm:px-6 lg:px-8"></div>
          <p className="text-xs">© 2024 Safenax (pvt) Ltd | This site is a demo project for testing purposes only.</p>
        </div>
        </div>
        
      
        <div className="flex justify-center space-x-16 text-green-100 px-11 md:justify-start">
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
