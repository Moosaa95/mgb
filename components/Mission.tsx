// Mission.tsx

"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import {motion} from "framer-motion";
import { FaBullseye, FaEye, FaHandshake, FaHandsHelping, FaLeaf, FaLightbulb, FaPeopleCarry } from "react-icons/fa";


const content = [
  {
    title: "Innovation",
    description:
      "Pioneering engineering solutions that address modern challenges.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaLightbulb size={50} className="text-cyan-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Innovation</p>
      </div>
    ),
  },
  {
    title: "Sustainability",
    description:
      "Building a better, greener future through responsible practices.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--emerald-500))] flex items-center justify-center text-white">
          <FaLeaf size={50} className="text-emerald-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Sustainability</p>
      </div>
    ),
  },
  {
    title: "Integrity",
    description:
      "Upholding the highest standards of professionalism and ethics.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--emerald-500))] flex items-center justify-center text-white">
          <FaHandshake size={50} className="text-pink-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Integrity</p>
      </div>
    ),
  },
  {
    title: "Community",
    description:
      "Empowering communities through impactful projects and local engagement.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--emerald-500))] flex items-center justify-center text-white">
          <FaPeopleCarry size={50} className="text-yellow-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Community</p>
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "Providing top-quality engineering services that foster transparency, resourcefulness, and environmental responsibility.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaBullseye size={50} className="text-cyan-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Mission</p>
      </div>
    ),
  },
  {
    title: "Our Vision",
    description:
      "To be the leading company for comprehensive projects, distinguished by our focus on execution, safety, and sustainability.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <FaEye size={50} className="text-yellow-400" />
       <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Vision</p>
      </div>
    ),
  },
  {
    title: "Our Values",
    description:
      "Empowering human resources, commitment to safety, and dedication to community development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <FaHandsHelping size={50} className="text-orange-50" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Values</p>
      </div>
    ),
  },
  
];

export default function Mission() {
  return (
    <section className="w-[100vw] space-y-4">
        <motion.h2
            className="text-3xl uppercase tracking-widest font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
         Who we Are  
        </motion.h2>
        <motion.p
            className="text-lg text-white/80 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            MBG Industrial and General Technologies is a leading engineering firm dedicated to sustainable solutions. 
            With a commitment to innovation and integrity, we strive to empower communities and industries.
          </motion.p>
    <div className="p-10 overflow-hidden">
      <StickyScroll content={content} />
    </div>
  </section>
  );
}
