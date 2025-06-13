import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const scrollY = window.scrollY;
      const homeHeight = homeSection?.offsetHeight || 0;
      setIsHome(scrollY < homeHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navClasses = isHome ? 'text-white bg-transparent' : 'text-black bg-white';

  const linkClass = "hover:text-green-600 block md:inline-block py-2 md:py-0";

  return (
    <header className={`fixed top-0 w-full shadow z-50 transition-colors duration-300 ${navClasses}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <div className="font-bold text-lg">NESDAN</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#mission-vision" className={linkClass}>Mission & Vision</a>
          <a href="#events" className={linkClass}>Events & Activities</a>
          <a href="#blog" className={linkClass}>Blog</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/donate"
            className="bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition hidden md:inline-block"
          >
            Donate
          </Link>
          <Link
            to="/admin"
            className="p-2 rounded-full hover:bg-green-100 transition"
            title="Admin Dashboard"
          >
            <Settings className="w-6 h-6" />
          </Link>

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-4 space-y-2 bg-white text-black`}>
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#mission-vision" className={linkClass}>Mission & Vision</a>
          <a href="#events" className={linkClass}>Events & Activities</a>
          <a href="#blog" className={linkClass}>Blog</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <Link
            to="/donate"
            className="block bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
