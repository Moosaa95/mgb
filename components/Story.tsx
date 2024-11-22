import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";


export function Story() {
    const data = [
        {
          title: "2024: Innovating for the Future",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                MBG launched its largest solar energy project, powering over 5,000 homes across Lagos State. This project reinforced our commitment to renewable energy solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/solar-one.jpeg"
                  alt="Solar Energy Project"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
                <Image
                  src="/images/solar-two.jpeg"
                  alt="Community Impact"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
              </div>
            </div>
          ),
        },
        {
          title: "2021: Expanding Horizons",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                MBG diversified into sustainable housing infrastructure, introducing energy-efficient designs that reduced building costs by 30% for developers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/coharis.jpg"
                  alt="Sustainable Housing"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
                <Image
                  src="/images/team-talk.jpeg"
                  alt="Team Collaboration"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
              </div>
            </div>
          ),
        },
        {
          title: "2018: Building Trust",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Secured key government contracts to improve rural electrification in Northern Nigeria, providing sustainable energy to underserved communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/project-one.jpg"
                  alt="Rural Electrification"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
                <Image
                  src="/images/coharis-one.jpg"
                  alt="Community Support"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
              </div>
            </div>
          ),
        },
        {
          title: "2015: The Beginning",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Founded in Lagos, MBG began with a vision to drive innovation in engineering and deliver sustainable solutions for Nigeria’s growing industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/home-hero.jpeg"
                  alt="Foundation of MBG"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
                <Image
                  src="/images/team-talk.jpeg"
                  alt="Teamwork"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
              </div>
            </div>
          ),
        },
      ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
