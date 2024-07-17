import React from 'react';

function MainNavigation() {
  return (
    <header className="bg-white block">
      <nav className="container-xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            JAG Aesthetic
          </a>
          <div className="flex space-x-4 hidden">
            <a href="#" className="text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-800">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
