import React, { useState } from "react";

const AdminAddEvent = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onAddEvent(); // refetch events
        setFormData({ title: "", date: "", location: "", description: "" });
      }
    } catch (err) {
      console.error("Failed to add event:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Add New Event</h2>

      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="w-full p-2 border rounded" />

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
        Add Event
      </button>
    </form>
  );
};

export default AdminAddEvent;
