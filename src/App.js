import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import MissionVision from './sections/MissionVision';
import Events from './sections/Events';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Donate from './sections/Donate'; // <-- Create this page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page with scroll sections */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Home />
                <About />
                <MissionVision />
                <Events />
                <Blog />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* Dedicated donation page */}
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
