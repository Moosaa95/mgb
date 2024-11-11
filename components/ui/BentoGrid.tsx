import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
//   icon?: React.ReactNode;
  icon: string;
  id?: number;
  link: string;
}) => {
  return (
    <Link
  href={link}
  className={cn(
    "relative rounded-3xl group hover:shadow-xl transition duration-300 shadow-md p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-gray-200 dark:border-transparent flex flex-col items-center space-y-4",
    className
  )}
  style={{
    background: 'rgb(2,0,36)',
    backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93, 108, 111,1) 80%'
  }}
  key={id}
>
  <div className="flex flex-col items-center text-center justify-between gap-10">
    <Image 
      src={icon} 
      alt="service" 
      width={70} 
      height={70} 
      className="mb-4 transition-transform duration-200 group-hover:scale-105" 
    />
    <div className="text-center">
      <h3 className="font-sans text-sm tracking-widest uppercase font-semibold text-neutral-800 dark:text-neutral-100 lg:text-lg md:text-2xl mb-1">
        {title}
      </h3>
      <p className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
</Link>

  );
};
