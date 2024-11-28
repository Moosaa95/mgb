'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
import  { QuoteModal } from './modal';
import { usePathname } from 'next/navigation';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname()

  // Listen for scroll events to toggle background transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Projects", "Clients", "Contact"];

  return (
    // <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
    <>
    <header className={`sticky top-0 backdrop-blur-sm z-20 transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
      <div className="bg-black">
          <motion.div
            className="flex items-center justify-center gap-3 py-3 text-sm text-white"
            animate={{ x: ["0%", "-97%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >

            {/* <p className="hidden text-white/90 md:block"><span className="font-bold">Email:</span>mbgigtlimited@gmail.com</p> */}
            <div className="flex items-center gap-1 space-x-10">
              <p><span>Phone:</span>+2348033336384</p>
              <p><span>Email:</span>mbgigtlimited@gmail.com</p>
              <p className="hidden md:block"><span>Head Office:</span>19, Alade Avenue, Ikeja, Lagos</p>
              <p className="hidden md:block"><span>Regional Offices:</span>Plot 400b, House 1b, Baguard Khalid street, Opposite Brain and Hammer Estate, Gwarinpa, Abuja FCT</p>
              {/* arrow right h-4 w-4 inline-flex justify-center items-center */}
            </div>
          </motion.div>
        </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link className="text-2xl font-bold text-indigo-600" href="/">
          MBG
        </Link>


        {/* Headerigation Links */}
        <div className={`md:flex space-x-6 items-center ${isOpen ? 'block' : 'hidden'}`}>
        {navItems.map((item, index) => {
          const linkHref = `/${item.toLowerCase().replace(/\s+/g, "-") === "home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`;
          const isActive = pathname === linkHref;
          return (
            <Link key={item} className={`${isScrolled ? 'text-gray-100': 'text-[#020025]'} hover:text-indigo-600 transition `} href={linkHref}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className={`list-none font-bold text-base cursor-pointer ${
                            isActive
                              ? "text-indigo-600 underline" // Active style
                              : isScrolled
                              ? "text-gray-100"
                              : "text-[#020025] hover:text-indigo-600"
                          }`}
              >
                {item}
              </motion.li>
            </Link>
          )})}
          <motion.button
            className={`px-4 py-2 ${isScrolled? 'bg-indigo-600' : 'bg-[#020025]'} text-white rounded-lg shadow hover:bg-indigo-700 transition`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
          >
            Get a Quote
          </motion.button>
        </div>
        <div 
            className="flex flex-col items-center justify-between w-8 h-8 overflow-hidden text-4xl text-blue-600 cursor-pointer md:hidden group"
            onClick={() => setShow(true)}
            >
          <span className="w-full h-[2px] bg-blue-700 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-blue-700 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-blue-700 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

      <AnimatePresence>
        {show && (
          <motion.div
            ref={ref}
            className="absolute top-0 right-0 flex flex-col items-end w-full h-screen bg-black bg-opacity-50 md:hidden"
            initial={{x:'100%'}}
            animate={{x:0}}
            exit={{x:'100%'}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}

        >
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#281d45] flex flex-col items-center px-4 py-10 relative"
          >
            <MdOutlineClose
              onClick={() => setShow(false)}
              className="absolute text-3xl text-white cursor-pointer hover:text-red-500 top-4 right-4"
            />
            <div className="flex flex-col items-center gap-7">
              <ul className="flex flex-col text-base gap-7">
                {navItems.map((item, index) => {
                const linkHref = `/${item.toLowerCase().replace(/\s+/g, "-") === "home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <Link
                    key={item}
                    className="flex items-center gap-1 font-medium text-white duration-300 cursor-pointer hover:text-white/60"
                    href={linkHref}
                    
                  >
                    <motion.li
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="cursor-pointer hover:text-white/70"
                      onClick={() => setShow(false)}
                    >
                      {item}
                    </motion.li>
                    
                  </Link>
                )})}
                  
              </ul>
            </div>

          </motion.div>
        </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
    <QuoteModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
