import React from 'react';
import image2 from '../images/image2.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-8"
      style={{ backgroundImage: `url(${image2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center md:text-left text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeIn">
          Welcome to Nesdan!
        </h1>

        {/* ✅ Ticker Animation */}
        <div className="mt-6 text-xl md:text-2xl max-w-full overflow-hidden h-8 relative">
          <div className="absolute whitespace-nowrap animate-marquee text-white font-medium">
            Protecting the Earth, One Action at a Time 
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-center md:justify-start mt-8">
          <Link
            to="/donate"
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Donate
          </Link>
          <button className="px-8 py-3 bg-yellow-400 text-green-900 font-bold rounded-lg hover:bg-yellow-500 transition">
            <a href='#about'>
            Learn More
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
