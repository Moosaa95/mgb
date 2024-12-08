'use client'

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-[#01031a] text-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center my-16">
        <h1 className="font-bold text-4xl md:text-5xl text-center">
        Ready to transform <span className="text-purple"> your </span> project with sustainable solutions?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center"> Let’s discuss how MBG Industrial and General Technologies can bring innovation, efficiency, and sustainability to your next project.</p>
        <MagicButton link="/contact" title="Get in Touch" position="right" icon={<FaLocationArrow />} />

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About MBG */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">MBG Industrial and General Technologies</h2>
          <p className="text-gray-400">
            Providing quality engineering services in solar power, infrastructure, and energy efficiency since 2008.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-indigo-400 transition" href="/">Home</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/about">About</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/services">Services</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </motion.a>
          </div>
          <p className="text-gray-400">19, Alade Avenue, Ikeja, Lagos</p>
          <p className="text-gray-400">Email: enquiries@mbgtechsolutions.com</p>
          <p className="text-gray-400">Phone: 08033336384</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MBG Industrial and General Technologies. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
