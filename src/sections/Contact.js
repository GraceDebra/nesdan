import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-green-100 py-20 px-6 md:px-16 text-green-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Contact Us
        </h2>
        <p className="text-center mb-10 text-green-700">
          We'd love to hear from you! Whether you have a question, want to
          volunteer, or just want to say hi — reach out to us.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <p>
              📍 <strong>Location:</strong> Nairobi, Kenya
            </p>
            <p>
              📞 <strong>Phone:</strong> +254 700 123 456
            </p>
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:info@nesdan.org"
                className="text-green-700 underline"
              >
                info@nesdan.org
              </a>
            </p>
          </div>

          {/* Contact Form (Static for now) */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-green-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-green-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md border border-green-300"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
              onClick={(e) => e.preventDefault()} // Static version
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
