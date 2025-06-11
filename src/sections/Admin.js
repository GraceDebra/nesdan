import React, { useEffect, useState } from 'react';
import AddEventModal from '../components/AddEventModal';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const fetchEvents = async () => {
    const res = await fetch('http://localhost:5000/events');
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const res = await fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setEvents(events.filter(e => e.id !== id));
      } else {
        alert("Failed to delete event.");
      }
    }
  };

  const handleAdd = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

      <button
        className="bg-green-600 text-white py-2 px-4 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        + Add New Event
      </button>

      {showModal && <AddEventModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}

      <table className="w-full text-left border border-gray-300">
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
            <tr key={event.id} className="border">
              <td className="p-2 border">{event.title}</td>
              <td className="p-2 border">{event.date}</td>
              <td className="p-2 border">{event.location}</td>
              <td className="p-2 border">{event.description}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
