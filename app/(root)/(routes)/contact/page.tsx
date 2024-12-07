"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('')
  

  const handleSubmit = async (event: React.FormEvent) => {
    // Prevent page refresh on submit
    event.preventDefault();

    // Get form data
    const formData = {
      name: (event.target as any).name.value,
      email: (event.target as any).email.value,
      // subject: (event.target as any).subject.value,
      message: (event.target as any).message.value,
    };

    console.log(formData, '============');

    setLoading(true); // Set loading to true while waiting for response
    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data.accepted ? "Message sent successfully!" : "Failed to send message.");
    } catch (error) {
      setResult("Error: Could not send the message.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult("");  // Reset the result after 10 seconds
      }, 10000);

      return () => clearTimeout(timer);  // Cleanup the timer if component is unmounted or result changes
    }
  }, [result]);


  return (
    <div className="bg-black-100 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            We’re here to assist you. Reach out to us today.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-black-300 p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaMapMarkerAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p>19, Alade Avenue, Ikeja, Lagos, Nigeria</p>
          </motion.div>
          <motion.div
            className="bg-black-300 p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaPhoneAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p>+234 8033336384</p>
            <p>+234 8109151195</p>
            <p>+234 8154335537</p>
          </motion.div>
          <motion.div
            className="bg-black-300 p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaEnvelope className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p>enquiries@mbgtechsolutions.com</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-black-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-black-300 p-8 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="border bg-black-300 border-black-200 rounded-lg p-3 w-full focus:outline-indigo-600"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="border bg-black-300 border-black-200 rounded-lg p-3 w-full focus:outline-indigo-600"
                required
              />
            </div>
            {/* <div className="mb-4">
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="border bg-black-300 border-black-200 rounded-lg p-3 w-full focus:outline-indigo-600"
                required
              />
            </div> */}
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="border bg-black-300 border-black-200 rounded-lg p-3 w-full focus:outline-indigo-600"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition w-full"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>

          {/* Result Message */}
          {result && (
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold text-green-500">{result}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
