import React from 'react';
import image6 from '../images/image6.jpg';
import image5 from '../images/image5.webp';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="bg-white py-20 px-6 md:px-16 text-green-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800"> Mission & Vision</h2>

        {/* Mission Block */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
          {/* Left Image */}
          <img
            src={image6}
            alt="Our Mission"
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
          <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold mb-4">🌿 Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To inspire and empower communities to take meaningful action towards environmental conservation and sustainable development.
              We aim to educate, advocate, and implement innovative solutions that safeguard ecosystems, uplift local livelihoods,
              and foster a culture of environmental responsibility.
            </p>
          </div>
        </div>

        {/* Vision Block */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold mb-4">🌍 Our Vision</h3>
            <p className="text-lg leading-relaxed">
              A thriving planet where humanity lives in harmony with nature — where environmental sustainability is the foundation
              of every decision, policy, and community initiative.
            </p>
          </div>
          {/* Right Image */}
          <img
            src={image5}
            alt="Our Vision"
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
