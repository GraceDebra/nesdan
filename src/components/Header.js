import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const scrollY = window.scrollY;
      const homeHeight = homeSection?.offsetHeight || 0;
      
      setIsHome(scrollY < homeHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full shadow z-50 transition-colors duration-300 ${
        isHome ? 'text-white bg-transparent' : 'text-black bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Navigation Links */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#mission-vision" className="hover:text-green-600">Mission & Vision</a>
          <a href="#events" className="hover:text-green-600">Events & Activities</a>
          <a href="#blog" className="hover:text-green-600">Blog</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>

        {/* Right: Donate Button */}
       <Link
  to="/donate"
  className="bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
>
  Donate
</Link>
      </nav>
    </header>
  );
};

export default Header;
