"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const allProjects = [
  {
    title: "Solar Hybrid System",
    description:
      "Installation of Solar Hybrid System at FCMB MURITALA MOHAMMED WAY ILORIN, KWARA STATE.",
    image: "/images/ongoing-project/solar-hybrid-system1.jpeg",
    category: "Ongoing",
  },
  {
    title: "Solar Hybrid Power System",
    description:
      "Solar Hybrid Power System for Ecobank on Muritala Mohammed Way Ilorin, Kwara State.",
    image: "/images/completed-project/solar-hybrid-power-system .jpeg",
    category: "Completed",
  },
  {
    title: "Solar Hybrid System",
    description:
      "Installation of Solar Hybrid System at FCMB MURITALA MOHAMMED WAY ILORIN, KWARA STATE.",
    image: "/images/ongoing-project/solar-hybrid-system2.jpeg",
    category: "Ongoing",
  },
  // {
  //   title: "Modern Logistics Hub",
  //   description:
  //     "Development of a state-of-the-art logistics hub for efficient transportation and distribution in Port Harcourt.",
  //   image: "/images/coharis-power-installation.jpg",
  //   category: "Ongoing",
  // },
  {
    title: "Installation",
    description:
      "FCMB on Akin Olugbade Street, Ijebu-Ode, Ogun State",
    image: "/images/ongoing-project/FCMB3.jpeg",
    category: "Ongoing",
  },
  {
    title: "FCMB",
    description:
      "FCMB on Akin Olugbade Street, Ijebu-Ode, Ogun State",
    image: "/images/ongoing-project/FCMB5.jpeg",
    category: "Ongoing",
  },
  {
    title: "Solar Hybrid System",
    description:
      "Installation of Solar Hybrid System at FCMB MURITALA MOHAMMED WAY ILORIN, KWARA STATE.",
    image: "/images/ongoing-project/solar-hybrid-system4.jpeg",
    category: "Ongoing",
  },
  {
    title: "Solar Hybrid System",
    description:
      "Installation of Solar Hybrid System at FCMB MURITALA MOHAMMED WAY ILORIN, KWARA STATE.",
    image: "/images/ongoing-project/solar-hybrid-system5.jpeg",
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
                height={200}
                className="rounded-lg mb-4 h-[400px]"
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
