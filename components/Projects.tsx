'use client'
import { FocusCards } from "./ui/FocusCard";
import {motion} from "framer-motion"
import MagicButton from "./ui/MagicButton";
import { FiArrowRight } from "react-icons/fi";




export default function Project({title="Our Projects", projectItems, link}:ProjectProps) {
  return (
    <section className="w-[100vw]">
        <motion.h2
            className="text-3xl uppercase tracking-widest font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
         {title}   
        </motion.h2>
        <FocusCards cards={projectItems} />
        {link && (
          <div className='flex justify-center'>
              <MagicButton title='Learn More' link={link} icon={<FiArrowRight />} position='right' />
          </div>
        )}
    </section>
  );
}
