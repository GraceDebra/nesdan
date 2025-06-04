import React from 'react';
import image6 from '../images/image6.jpg'; 

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image6}
          alt="Donate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Split Background Form Area */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Half - Dark Green */}
        <div className="md:w-1/2 bg-green-900 flex items-center justify-center p-8 text-white">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold mb-6">Make a Donation</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-white text-black"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-white text-black"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1">Donation Amount (KES)</label>
                <input
                  type="number"
                  className="w-full p-2 rounded bg-white text-black"
                  placeholder="e.g. 1000"
                />
              </div>
              <div>
                <label className="block mb-1">Payment Method</label>
                <select className="w-full p-2 rounded bg-white text-black">
                  <option>Mpesa</option>
                  <option>Card</option>
                  <option>PayPal</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-green-900 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>

        {/* Right Half - Light Green */}
        <div className="md:w-1/2 bg-green-100 hidden md:flex items-center justify-center p-8">
          <div className="max-w-md text-center text-green-900">
            <h3 className="text-2xl font-semibold mb-4">
              Your contribution helps us protect the Earth!
            </h3>
            <p>
              Every donation makes a difference. Support our mission and be part of a greener future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
