import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
        
        
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-6 w-auto" /> 
          <span className="text-base font-bold text-gray-800">HERO.IO</span>
        </NavLink>

        
        <nav className="flex items-center space-x-8">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-purple-600 font-bold border-b-2 border-purple-600" : "text-gray-600"}>
            Home
          </NavLink>
          <NavLink to="/all-apps" className={({ isActive }) => isActive ? "text-purple-600 font-bold border-b-2 border-purple-600" : "text-gray-600"}>
            Apps
          </NavLink>
          <NavLink to="/my-installation" className={({ isActive }) => isActive ? "text-purple-600 font-bold border-b-2 border-purple-600" : "text-gray-600"}>
            Installation
          </NavLink>
        </nav>

        
        <a href="https://github.com" target="_blank" className="text-xs bg-black text-white px-3 py-1.5 rounded-md">
          Github
        </a>
      </div>
    </header>
  );
};

export default Header;