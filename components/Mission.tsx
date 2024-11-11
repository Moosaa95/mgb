// Mission.tsx

"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";

const content = [
  {
    title: "Our Mission",
    description:
      "Providing top-quality engineering services that foster transparency, resourcefulness, and environmental responsibility.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Mission</p>
      </div>
    ),
  },
  {
    title: "Our Vision",
    description:
      "To be the leading company for comprehensive projects, distinguished by our focus on execution, safety, and sustainability.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Vision</p>
      </div>
    ),
  },
  {
    title: "Our Values",
    description:
      "Empowering human resources, commitment to safety, and dedication to community development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Values</p>
      </div>
    ),
  },
];

export default function Mission() {
  return (
    <div className="p-10 overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}
