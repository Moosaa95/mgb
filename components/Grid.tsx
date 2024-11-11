"use client"
import React from 'react'
import {motion} from "framer-motion"
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

interface Props {
    title: string;
    description: string;
    icon: string;
    link: string;
    id: number;
}

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
const Grid = ({title, services}: {title:string; services:Props[]}) => {
  return (
    <section id='services'>
        <motion.h2
            className="text-3xl uppercase tracking-widest font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            {title}
        </motion.h2>
        <BentoGrid>
            {services.map(({id, title, description, icon, link}, i) => (
                <BentoGridItem
                    className=''
                    title={title}
                    key={id}
                    description={description}
                    id={id}
                    header={<Skeleton />}
                    icon={icon}
                    link={link}
                    
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid