"use client";

import Testimonials from "@/components/Testimonial";
import { motion } from "framer-motion";
import Image from "next/image";



const clients = [
  { name: " Starsight Utility Power Services Limited", logo: "/images/clients/starsight.png" },
  { name: "KDF Engineering Limited", logo: "/images/clients/kdf_technologies_logo.jpeg" },
  { name: "Sterling Bank Plc", logo: "/images/clients/sterling-bank.jpg" },
  // { name: "Federal Medical Centres", logo: "/images/clients/" },
  { name: "FCMB", logo: "/images/clients/fcmb.jpeg" },
  { name: "Access Bank Plc", logo: "/images/clients/Access-Bank-Plc.jpg" },
  { name: "Ecobank Nigeria Limited", logo: "/images/clients/ecobank.png" },
  { name: "Daroju Company Nigeria Limited", logo: "/images/clients/daraju.png" },
  { name: "Lekki Construction Gardens", logo: "/images/clients/lekki.jpeg" },
  { name: "Wema Bank", logo: "/images/clients/Wema_Bank_Plc.jpg" },
  { name: "Polaris Bank Plc", logo: "/images/clients/polaris.png" },
  { name: "IPSOS INTERNATIONAL", logo: "/images/clients/Ipsos.png" },
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

      <div className="overflow-hidden relative">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0">
              <motion.div
                className="flex flex-col items-center justify-center bg-black-300 p-6 shadow-lg rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-20 h-20"
                />
              </motion.div>
              <p className="text-center mt-2 text-sm text-gray-300 font-bold">{client.name}</p>
            </div>
          ))}

          {/* Repeat logos for seamless scrolling */}
          {clients.map((client, index) => (
            <div key={index + clients.length} className="flex-shrink-0">
              <motion.div
                className="flex flex-col items-center justify-center bg-black-300 p-6 shadow-lg rounded-lg"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-20 h-20"
                />
              </motion.div>
              <p className="text-center mt-2 text-sm text-gray-700">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* Client Testimonials */}
      <div>
        <Testimonials title=" What Our Clients Say" />
      </div>
    </div>
  );
}
