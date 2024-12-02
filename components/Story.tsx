import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";

export function Story() {
  const data = [
    {
      title: "2008: The Beginning",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            MBG Industrial and General Technologies Limited was founded with a team of five, focusing on providing small-scale power solutions for homes, offices, and companies. This marked the beginning of a journey toward becoming a leading engineering and infrastructure company.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/beginning-three.jpg"
              alt="Foundation of MBG"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/beginning-five.jpg"
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
      title: "2015: Scaling New Heights",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            MBG expanded its operations to include industrial and estate facilities maintenance, growing its team to over 50 full-time employees and taking on large-scale industrial projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/beginning-two.jpg"
              alt="Industrial Expansion"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/beginning-one.jpg"
              alt="Facilities Maintenance"
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
            Secured key contracts for rural electrification in Northern Nigeria, providing sustainable energy solutions to underserved communities, and reinforcing MBG's role in renewable energy development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/team-talk.jpeg"
              alt="Rural Electrification"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/beginning.jpg"
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
      title: "2021: Expanding Horizons",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            MBG diversified into housing infrastructure, introducing energy-efficient designs and sustainable construction practices that reduced building costs by 30%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/mbg/mbg_solution26.jpg"
              alt="Housing Infrastructure"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/mbg/mbg_solution27.jpg"
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
      title: "2024: Innovating for the Future",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Launched a large-scale solar energy project powering over 5,000 homes, demonstrating MBG's commitment to renewable energy and sustainable development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/mbg/mbg_solution14.jpg"
              alt="Solar Energy Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/mbg/mbg_solution15.jpg"
              alt="Community Impact"
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
