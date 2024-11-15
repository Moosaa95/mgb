import Image from "next/image";
import { Timeline } from "./ui/Timeline";

export function WhoWeAreTimeline() {
    const data = [
      {
        title: "2008",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Founded with a mission to provide high-quality engineering services focused on sustainable solutions.
            </p>
            <Image
              src="/images/foundation.jpg" // Placeholder image
              alt="Company foundation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        ),
      },
      {
        title: "2015",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Expanded operations nationwide, securing major contracts with MTN, Airtel, and the Nigeria Bottling Company.
            </p>
            <Image
              src="/images/expansion.jpg" // Placeholder image
              alt="Expansion"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        ),
      },
      {
        title: "2020",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Achieved ISO certification, further solidifying our commitment to quality and innovation.
            </p>
            <Image
              src="/images/iso-certification.jpg" // Placeholder image
              alt="ISO Certification"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        ),
      },
      {
        title: "Today",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Continuing to lead with innovation, sustainability, and integrity in every project.
            </p>
            <Image
              src="/images/today.jpg" // Placeholder image
              alt="Today"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
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
  
  export default WhoWeAreTimeline;