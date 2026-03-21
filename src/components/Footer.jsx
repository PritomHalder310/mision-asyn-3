import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        
        <div className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} <span className="text-purple-600 font-bold">HERO.IO</span>. All rights reserved.
        </div>

        
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors font-semibold">
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;