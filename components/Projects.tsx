'use client'
import { FocusCards } from "./ui/FocusCard";
import {motion} from "framer-motion"




export default function Project({title="Our Projects", projectItems}:ProjectProps) {
  return (
    <section className="w-[100vw] border-2 border-red-400">
        <motion.h2
            className="text-3xl uppercase tracking-widest font-bold text-center text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
         {title}   
        </motion.h2>
        <FocusCards cards={projectItems} />
    </section>
  );
}
