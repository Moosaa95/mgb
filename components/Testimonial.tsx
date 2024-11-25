"use client";

import React from "react";
import {motion} from "framer-motion"
import { InfiniteMovingCards } from "./ui/InfiniteMoving";


export default function Testimonials({title="Testimonials"}:{title?:string}) {
  return (
    <section className="py-0">
        <motion.h2
    className="text-4xl md:text-5xl uppercase tracking-widest font-bold text-center text-white mb-8 sm:mb-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
>
    {title}
    
</motion.h2>

        <div className="flex flex-col items-center max-lg:mt-10">
            {/* <div className="h-[50vh] rounded-md md:h-[30rem] flex flex-col antialiased items-center overflow-hidden relative"> */}
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slower"
                />
                <div className="">

                </div>
            {/* </div> */}
        
        </div>
    </section>
  );
}

const testimonials = [
    {
      quote:
        "MBG delivered beyond expectations on our solar energy project. Thanks to their expertise, we’ve drastically reduced power costs in our Lagos facility. Their team’s professionalism is top-notch.",
      name: "Adekunle Adebayo",
      title: "Operations Manager, Lagos Tech Hub",
    },
    {
      quote:
        "The housing infrastructure solutions provided by MBG helped us complete our estate project ahead of schedule. Their commitment to quality and sustainability makes them a trusted partner for us in Nigeria.",
      name: "Ngozi Okafor",
      title: "CEO, Zenith Estates",
    },
    {
      quote:
        "MBG’s innovative engineering services played a key role in our recent telecommunications project. Their ability to adapt to the unique challenges of the Nigerian market is commendable.",
      name: "Chukwuma Eze",
      title: "Regional Manager",
    },
    {
      quote:
        "Working with MBG on our logistics and transportation needs was a seamless experience. They ensured all materials were delivered on time, and their customer service is exceptional.",
      name: "Amaka Johnson",
      title: "Logistics Lead",
    },
    {
      quote:
        "As a government partner, MBG has consistently delivered on infrastructure projects with professionalism and efficiency. Their contributions are helping to shape a better future for our communities.",
      name: "Dr. Ibrahim Abdullahi",
      title: "Director",
    },
    {
      quote:
        "From consultation to implementation, MBG demonstrated their expertise in renewable energy. Our factory now runs more efficiently, and we’ve significantly cut down on diesel consumption.",
      name: "Tunde Olamide",
      title: "Plant Manager, Flour Mills of Nigeria",
    },
  ];
  