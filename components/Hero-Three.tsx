"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/HeroSlider";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FiArrowRight } from "react-icons/fi";

export default function HeroBannerThree() {
  const images = [
    "/images/home-hero-two.jpeg",
    "/images/home-hero.jpeg",
    "/images/home-hero-four.jpeg",
    "/images/home-hero-three.jpeg",
    "/images/home-hero-five.jpeg",
    
  ];
  return (
    <ImagesSlider className="h-[50rem] mb-10" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Powering a Sustainable Future with Renewable Solutions
        </motion.p>
        <TextGenerateEffect
            className='text-2xl md:text-7xl font-bold dark:text-white'
            words='MBG is dedicated to driving innovation in engineering and creating eco-friendly solutions that empower communities.'
        />
      <MagicButton title='Learn More' icon={<FiArrowRight />} position='right' />

      </motion.div>
    </ImagesSlider>
  );
}
