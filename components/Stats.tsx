"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function ClientImpact() {
  const stats = [
    { number: 100, description: "Projects Successfully Delivered" },
    { number: 20, description: "Years of Industry Expertise" },
    { number: 50, description: "Skilled Professionals on Our Team" },
    { number: 30, description: "Communities Empowered Across Nigeria" },
    { number: 10, description: "Awards for Excellence and Innovation" },
  ];

  return (
    <section className="py-16 bg-black-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">
          Our Impact
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          At MBG Industrial and General Technologies, we pride ourselves on our
          contributions to engineering excellence and community empowerment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const AnimatedStatCard = ({
  number,
  description,
}: {
  number: number;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-black-300 shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h3
        className="text-4xl font-bold text-indigo-600"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {isInView && <Counter from={0} to={number} />}
      </motion.h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    if (value === to) return;

    const increment = to > from ? 1 : -1;
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev === to) {
          clearInterval(timer);
          return prev;
        }
        return prev + increment;
      });
    }, 30); // Adjust for faster/slower counting

    return () => clearInterval(timer);
  }, [from, to, value]);

  return <>{value}+</>;
};
