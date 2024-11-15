import Grid from '@/components/Grid'
import HeroBanner from '@/components/Hero'
import HeroBannerTwo from '@/components/Hero-Two';
import Mission from '@/components/Mission';
import Project  from '@/components/Projects';
import Testimonials from '@/components/Testimonial';
import Typewriter from '@/components/Typewriter';
import WhoWeAreTimeline from '@/components/WhoWeAre';
import WhyChooseUs from '@/components/Why';
import React from 'react'


const cards: ProjectCard[] = [
    {
        id: 1,
      title: "Power Solution for Coscharis Group",
      description: "Installation of power systems at Coscharis Group headquarters in Lagos.",
      src: "/images/coharis-power-installation.jpg",
      link: "/projects/coscharis-power",
    },

    {
        id: 2,
      title: "Installation Of Street and Security Light",
      description: "Installation and commissioning of street and security light (LED) for  Coscharis Group HQ, Awoyaya, Lagos.",
      src: "/images/coharis-one.jpg",
      link: "/projects/mtn-site",
    },
    {
      id: 3,
      title: "Installation Of Treatment plant for Kwara Breweries Limited",
      description: "Installation and design of effluent Treatment Plamt.",
      src: "/images/bweries-kwara.jpg",
      link: "/projects/mtn-site",
    },
  ];

const services:ServiceProps[] = [
    {
        id: 1,
      title: "Solar Engineering",
      description: "End-to-end solar solutions designed to maximize energy efficiency and sustainability.",
      icon: "/images/solar-energy.svg",
      link: "/services#solar-engineering"
    },
    {
        id: 2,
      title: "Housing Infrastructure",
      description: "Energy-efficient housing solutions integrating modern and sustainable designs.",
      icon: "/images/housing-svgrepo-com.svg",
      link: "/services#housing-infrastructure"
    },
    {
        id: 3,
      title: "Renewable Energy",
      description: "Comprehensive renewable solutions including wind, solar, and hybrid systems.",
      icon: "/images/renewable-energy-innovation-svgrepo-com.svg",
      link: "/services#renewable-energy"
    },
  ];

const Home = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 overflow-clip">
        {/* <div className="max-w-7xl w-full"> */}
        <div className="max-w-full w-[100vw]">
            {/* <HeroBanner /> */}
            <HeroBannerTwo />

        </div>
        <div>
            <Mission />
        </div>
        <div className='flex flex-col my-10'>
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
        </div>
        <div>
          <Testimonials />
        </div>
    </div>
  )
}

export default Home