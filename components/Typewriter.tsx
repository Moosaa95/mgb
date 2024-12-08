"use client";

import { TypewriterEffect } from "./ui/TypewriterEffect";
import { useRouter } from 'next/navigation'


export default function Typewriter() {
  const router = useRouter()


  const words = [
    {
      text: "Empower",
    },
    {
      text: "sustainable",
    },
    {
      text: "engineering",
    },
    {
      text: "solutions",
    },
    {
      text: `With  MBG `,
      className: "text-indigo-500 font-bold",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      {/* Tagline */}
      <p className="text-gray-800 dark:text-gray-200 text-lg mb-6">
        The road to innovation begins with us.
      </p>

      {/* Typewriter Effect */}
      <TypewriterEffect words={words} />

      {/* Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button onClick={() => router.push("/about")} className="w-40 h-10 rounded-xl bg-indigo-600 text-white text-sm shadow-lg hover:bg-indigo-700 transition">
          Learn More
        </button>
        <button onClick={() => router.push("/contact")} className="w-40 h-10 rounded-xl bg-white text-indigo-600 border border-indigo-600 text-sm shadow-lg hover:bg-indigo-100 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}
