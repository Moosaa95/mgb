// import React from 'react'

// interface Props {
//     title: string;
//     icon: React.ReactNode;
//     position: string;
//     handleClick?: () => void;
//     otherClasses?: string;
// }
// const MagicButton = ({title, icon, position, handleClick, otherClasses}:Props) => {
//   return (
//     <button onClick={handleClick} className="relative inline-flex h-12 w-full  overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
//         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//         <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
//             {position == "left" && icon}
//             {title}
//             {position == "right" && icon}
//         </span>
//     </button>
//   )
// }

// export default MagicButton

import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  link?: string; // Optional link prop for navigation
}

const MagicButton: React.FC<Props> = ({ title, icon, position, handleClick, otherClasses, link }) => {
  const buttonContent = (
    <span
      className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </span>
  );

  return link ? (
    <Link href={link} passHref className='relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10'>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        {buttonContent}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      {buttonContent}
    </button>
  );
};

export default MagicButton;
