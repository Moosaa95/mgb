"use client"
import Mission from '@/components/Mission'
import Testimonials from '@/components/Testimonial'
import React from 'react'
import {motion} from "framer-motion"
import { Story } from '@/components/Story'
import { Teams } from '@/components/Team'
import { ClientImpact } from '@/components/Stats'
const About = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        {/* <div className="max-w-7xl w-full"> */}
        {/* <div className="max-w-full w-[100vw]"> */}
            {/* <HeroBanner /> */}
            {/* <HeroBannerTwo /> */}

        {/* </div> */}
        
        <section className="relative w-full h-[50vh]  flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About MBG Industrial and General Technologies
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Empowering industries and communities with sustainable engineering solutions.
          </p>
        </motion.div>
      </section>
        <div>
            <Mission description='MBG Industrial and General Technologies is a trusted engineering
            firm dedicated to providing innovative, sustainable, and
            community-focused solutions. With a commitment to excellence and
            integrity, we are shaping the future of infrastructure and energy in Nigeria.' />
        </div>
        <div>
          <Story />
        </div>
        <div>
          <Teams />
        </div>
        <div>
          <ClientImpact />
        </div>
        {/* <div className='flex flex-col my-10'>
        <Grid title="Our Core Services" services={services} link='/service' />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div className='flex flex-col my-10'>
            <Project projectItems={cards} link='/project' />
        </div>
        <div>
          <Typewriter />
        </div> */}
        <div>
          <Testimonials />
        </div>
    </div>
  )
}

export default About