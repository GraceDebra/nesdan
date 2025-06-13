import React, { useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const EventsActivities = ({ events }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = showAll ? events : events.slice(0, 3);

  return (
    <section
      id="events"
      className="bg-green-100 py-20 px-6 md:px-16 text-green-900 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-green-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Events & Activities
        </motion.h2>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {visibleEvents.map((event, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={cardVariants}
              className="w-full sm:w-[300px] h-[350px] bg-white p-6 rounded-xl shadow-md border border-green-200 hover:shadow-lg transition"            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {event.title}
              </h3>
              <p className="text-sm text-green-600 mb-1">
                📅 <strong>Date:</strong> {event.date}
              </p>
              <p className="text-sm text-green-600 mb-2">
                📍 <strong>Location:</strong> {event.location}
              </p>
              <p className="text-sm leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Show More / Less Button */}
        {events.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsActivities;
