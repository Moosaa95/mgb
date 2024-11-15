"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaLeaf, FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const strengths = [
  {
    title: "Reliability and Trustworthiness",
    description: "With a track record of successful projects, MBG is a trusted partner for sustainable engineering solutions.",
    icon: <FaShieldAlt className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Innovative Solutions",
    description: "Leveraging cutting-edge technology to provide innovative and efficient engineering solutions.",
    icon: <FaLightbulb className="text-green-500 text-4xl" />,
  },
  {
    title: "Expertise and Experience",
    description: "Over a decade of experience with a team of seasoned professionals in various engineering fields.",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
  },
  {
    title: "Commitment to Sustainability",
    description: "Dedicated to eco-friendly practices and minimizing environmental impact in all our projects.",
    icon: <FaLeaf className="text-emerald-500 text-4xl" />,
  },
  {
    title: "Community Impact",
    description: "Investing in communities through impactful projects and empowering local talent.",
    icon: <FaHandsHelping className="text-yellow-500 text-4xl" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16  dark:bg-[#01031a] text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
            className="text-3xl uppercase tracking-widest font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
         Why Choose Us 
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#020025] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                {strength.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">{strength.title}</h3>
                <p className="mt-2 text-gray-200 text-center">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
