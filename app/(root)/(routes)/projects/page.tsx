"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const allProjects = [
  {
    title: "Lagos Solar Power Initiative",
    description:
      "Installation of solar power systems for over 5,000 homes in Lagos State, ensuring sustainable energy for the community.",
    image: "/images/coharis-one.jpg",
    category: "Completed",
  },
  {
    title: "Eco-Friendly Housing Development",
    description:
      "Design and construction of energy-efficient housing solutions in Abuja, reducing environmental impact.",
    image: "/images/coharis-one.jpg",
    category: "Ongoing",
  },
  {
    title: "Northern Nigeria Electrification",
    description:
      "Bringing reliable electricity to underserved rural communities in Northern Nigeria through innovative systems.",
    image: "/images/coharis-one.jpg",
    category: "Completed",
  },
  {
    title: "Modern Logistics Hub",
    description:
      "Development of a state-of-the-art logistics hub for efficient transportation and distribution in Port Harcourt.",
    image: "/images/coharis-power-installation.jpg",
    category: "Ongoing",
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

  return (
    <div className="bg-black-100 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]  flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
          <p className="mt-4 text-lg md:text-xl">
            Showcasing our commitment to excellence and sustainability through impactful projects.
          </p>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 container mx-auto px-4">
        {/* Tab Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          {["All", "Ongoing", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-semibold rounded-lg ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-black-300 text-gray-300 hover:bg-black-200"
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black-300 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl text-gray-300 font-bold mb-2">{project.title}</h3>
              <p className="text-gray-200">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
