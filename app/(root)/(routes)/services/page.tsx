"use client";

import Grid from "@/components/Grid";
import { motion } from "framer-motion";
import Image from "next/image";

const services:ServiceProps[] = [
  {
    id: 1,
    title: "Solar Engineering",
    description:
      "End-to-end solar solutions, from design and installation to maintenance, ensuring efficient and sustainable energy for homes and businesses.",
    icon: "/images/solar-energy.svg",
  },
  {
    id: 2,
    title: "Housing Infrastructure",
    description:
      "Innovative and energy-efficient housing designs that cater to modern needs while minimizing environmental impact.",
    icon: "/images/solar-energy.svg",
  },
  {
    id: 3,
    title: "Renewable Energy Solutions",
    description:
      "Comprehensive renewable energy solutions, including wind, solar, and hybrid systems, tailored to meet diverse energy demands.",
    icon: "/images/solar-energy.svg",
  },
  {
    id: 4,
    title: "Logistics and Transportation",
    description:
      "Expertise in managing logistics and transportation systems to streamline operations and enhance efficiency.",
    icon: "/images/solar-energy.svg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black-100 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]  flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl">
            Delivering sustainable, innovative, and impactful solutions for your
            projects.
          </p>
        </motion.div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 container mx-auto px-4">
        <Grid title="What We Offer" services={services} />
      </section>
    </div>
  );
}
