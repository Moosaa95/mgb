"use client";
import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

interface QuoteModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const services = [
  "Solar Engineering",
  "Housing Infrastructure",
  "Renewable Energy",
  "Electrical Installations",
  "Piping and Mechanical Systems",
];

export const QuoteModal: React.FC<QuoteModalProps> = ({ isVisible, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState<Record<string, string>>({});

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);


  const handleSubmit = (event: React.FormEvent) => {
    const formData = {
      name: (event.target as any).name.value,
      email: (event.target as any).email.value,
      service: (event.target as any).service.value,
      message: (event.target as any).message.value,
    };

    
    event.preventDefault();
    setLoading(true);
    fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => setResult(data))
    .catch(error => setResult(error))
    .finally(() => setLoading(false))
    // Simulate an API call
    // setTimeout(() => {
    //   setLoading(false);
    //   setSuccess(true);

    //   // Close modal after showing success (optional)
    //   setTimeout(() => {
    //     setSuccess(false);
    //     onClose();
    //   }, 3000);
    // }, 2000); // Simulating a 2-second API call
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-black-100 rounded-lg shadow-lg p-6 w-[90%] max-w-lg relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <MdOutlineClose size={24} />
            </button>

            {/* Loader */}
            {loading && (
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="loader border-t-4 border-white w-12 h-12 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Success Message */}
            {success ? (
              <div className="text-center py-6">
                <h2 className="text-xl font-bold text-green-500">Thank you!</h2>
                <p className="text-gray-300 mt-2">
                  Your request has been successfully submitted.
                </p>
              </div>
            ) : (
              <>
                {/* Modal Content */}
                <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-black-300 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-black-300 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                      Service
                    </label>
                    <select
                      id="service"
                      className="w-full bg-black-300 text-gray-300 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="" className="bg-black text-gray-400">
                        Select a Service
                      </option>
                      {services.map((service, index) => (
                        <option key={index} className="bg-black text-gray-300" value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-black-300 text-gray-300 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
