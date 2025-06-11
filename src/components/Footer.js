import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-green-900 text-white py-8 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">NESDAN</span>. All rights reserved.
        </p>

        <div className="flex space-x-4 text-xl">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FaLinkedinIn />
          </a>
        </div>

       <Link
            to="/donate"
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Donate
          </Link>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 bg-green-800 hover:bg-green-700 p-3 rounded-full text-white shadow-lg transition"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
