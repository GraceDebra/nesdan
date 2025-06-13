import React from 'react';
import image3 from '../images/image3.jpg'; 
import image4 from '../images/image4.jpg'; 

const About = () => {
  return (
    <section id="about" className="bg-green-50 py-20 px-6 md:px-16 text-green-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
  <img
    src={image4}
    alt="About NESDAN"
    className="w-full md:w-1/2 rounded-lg shadow-lg"
  />
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold mb-6 text-green-800">About Us</h2>
        <p className="mb-4 text-lg leading-relaxed">
          At <span className="font-semibold text-green-700">NESDAN</span> ,
          we are passionate about protecting the planet and promoting sustainable development for present and future generations. 
          Founded on the principles of environmental stewardship, community engagement, and climate action, our organization works 
          tirelessly to create awareness and implement practical solutions to today’s pressing environmental challenges.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Whether it is reforestation, waste management education, clean energy advocacy, or grassroots empowerment,
          NESDAN believes in the power of collective action. Our team is composed of dedicated volunteers, environmental scientists,
          educators, and activists who envision a greener, healthier, and more sustainable world.
        </p>
        <p className="text-lg leading-relaxed">
          Through partnerships, education, and direct community projects, we are making an impact—one tree, one village,
          one voice at a time.
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
