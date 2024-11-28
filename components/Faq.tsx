'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What services does MBG offer?",
    answer: "MBG specializes in Solar Engineering, Housing Infrastructure, Renewable Energy, Electrical Installations, Piping, and Mechanical Systems.",
  },
  {
    question: "How can I request a quote or make an inquiry?",
    answer: "You can easily request a quote by clicking the 'Request a Quote' button and providing your service requirements. Additionally, if you have any inquiries or need more information, feel free to send us a message through the contact form on our Contact page. We're here to assist you!",
  },
  {
    question: "What is MBG's turnaround time for projects?",
    answer: "Our turnaround time depends on the scope of the project. Once we review your requirements, we provide a detailed timeline.",
  },
  {
    question: "Does MBG operate internationally?",
    answer: "Yes, MBG takes on international projects. Contact us to discuss your specific needs.",
  },
  {
    question: "What makes MBG different from competitors?",
    answer: "MBG focuses on innovation, sustainability, and integrity, ensuring top-quality engineering solutions tailored to your needs.",
  },
];

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-black-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-300">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#020025] rounded-lg shadow-lg overflow-hidden max-w-4xl w-full lg:w-[40rem] mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300"
              >
                <span>{item.question}</span>
                <motion.div
                  animate={{
                    rotate: expandedIndex === index ? 180 : 0,
                  }}
                >
                  ▼
                </motion.div>
              </button>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-600"
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
