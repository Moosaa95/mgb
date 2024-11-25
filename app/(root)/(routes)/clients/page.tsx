"use client";

import Testimonials from "@/components/Testimonial";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Dangote Group", logo: "/images/dangote-logo.png" },
  { name: "Zenith Estates", logo: "/images/zenith-logo.png" },
  { name: "EcoSolutions Nigeria", logo: "/images/ecosolutions-logo.png" },
  { name: "Port Harcourt Logistics", logo: "/images/ph-logistics-logo.png" },
];

const testimonials = [
  {
    quote:
      "Working with MBG has been a game-changer. Their innovative solutions and attention to detail have significantly improved our operations.",
    name: "Adekunle Adebayo",
    designation: "Project Manager at EcoSolutions Nigeria",
  },
  {
    quote:
      "MBG's professionalism and commitment to excellence set them apart. Their expertise was invaluable for our solar power project.",
    name: "Ngozi Okafor",
    designation: "CEO at Zenith Estates",
  },
];

export default function ClientPage() {
  return (
    <div className="bg-black-100 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Clients</h1>
          <p className="mt-4 text-lg md:text-xl">
            Proudly collaborating with leading organizations across industries.
          </p>
        </motion.div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center bg-black-300 p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <div>
        <Testimonials title=" What Our Clients Say" />
      </div>
    </div>
  );
}
