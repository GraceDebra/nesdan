import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import MissionVision from './sections/MissionVision';
import Events from './sections/Events';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Donate from './sections/Donate';
import AdminAddEvent from './sections/AddEvent';
import './App.css'; 
import Admin from './sections/Admin';
import SinglePost from './sections/SinglePost';
import Login from './sections/Login';

function App() {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetch("https://nesdan-backend.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Failed to fetch events:", error));
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

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
                <Events events={events} />
                <Blog />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* Individual pages */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={<Admin />}
        />
        <Route path="/blog/:id" element={<SinglePost />} />

      </Routes>
    </Router>
  );
}

export default App;
