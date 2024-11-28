import { FAQSection } from '@/components/Faq';
import Grid from '@/components/Grid'
import HeroBannerThree from '@/components/Hero-Three';
import Project  from '@/components/Projects';
import Testimonials from '@/components/Testimonial';
import Typewriter from '@/components/Typewriter';
import WhyChooseUs from '@/components/Why';
import React from 'react'


const cards: ProjectCard[] = [
    {
        id: 1,
      title: " Solar Hybrid System",
      description: "Installation of Solar Hybrid System at FCMB MURITALA MOHAMMED WAY ILORIN, KWARA STATE.",
      src: "/images/ongoing-project/solar-hybrid-system1.jpeg",
      link: "/projects/coscharis-power",
      status: "ongoing"
    },

    {
        id: 2,
      title: "FCMB",
      description: "FCMB on Akin Olugbade Street, Ijebu-Ode, Ogun State",
      src: "/images/ongoing-project/FCMB3.jpeg",
      link: "/projects/mtn-site",
      status: "ongoing"
    },
    {
      id: 3,
      title: "Solar Hybrid Power System",
      description: "Solar Hybrid Power System for Ecobank on Muritala Mohammed Way Ilorin, Kwara State.",
      src: "/images/completed-project/solar-hybrid-power-system .jpeg",
      link: "/projects/mtn-site",
      status: "completed"
    },
    {
      id: 4,
      title: "Solar Hybrid Power System",
      description: "Installation of Solar Hybrid System at FCMB MURITALA MOHAMMED WAY ILORIN, KWARA STATE.",
      src: "/images/ongoing-project/solar-hybrid-power-system5.jpeg",
      link: "/projects/mtn-site",
      status: "ongoing"
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
    <div className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-full w-[100vw]">
            <HeroBannerThree />

        </div>
        <div className='flex flex-col my-10'>
        <Grid title="Our Core Services" services={services} link='/services' />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div className='flex flex-col my-10'>
            <Project projectItems={cards} link='/projects' />
        </div>
        <div>
          <Typewriter />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <FAQSection />
        </div>
    </div>
  )
}

export default Home