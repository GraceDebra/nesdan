import React, { useEffect, useState } from 'react';
import config from '../config';
import AddEventModal from '../components/AddEventModal';


const Admin = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${config.API_BASE_URL}/events`, {
        headers: {
          'Authorization': token,
        },
      });

      if (!res.ok) throw new Error('Failed to fetch events');

      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
      alert('Could not load events');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    } else {
      fetchEvents();
    }
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const res = await fetch(`${config.API_BASE_URL}/events/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          setEvents(events.filter((e) => e.id !== id));
        } else {
          const errorData = await res.json();
          console.error('Delete failed:', errorData);
          alert('Failed to delete event.');
        }
      } catch (error) {
        console.error(error);
        alert('Error deleting event');
      }
    }
  };

  const handleAdd = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Events</h1>
        <button onClick={handleLogout} className="bg-gray-600 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>

      <button
        className="bg-green-600 text-white py-2 px-4 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        + Add New Event
      </button>

      {showModal && <AddEventModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border hover:bg-green-50">
                <td className="p-2 border">{event.title}</td>
                <td className="p-2 border">{event.date}</td>
                <td className="p-2 border">{event.location}</td>
                <td className="p-2 border">{event.description}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;