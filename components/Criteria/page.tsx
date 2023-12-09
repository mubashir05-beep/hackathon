"use client";

import React, { useState, forwardRef } from "react";
import Magnetic from "../Framer";
import styles from "./style.module.scss";
interface Option {
  id: number;
  title: string;
  content: string;
}
const BasicRules: React.FC = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const OPTIONS: Option[] = [
    {
      id: 1,
      title: "Teams:",
      content:
        "Form interdisciplinary teams of 2 to 5 members or join individually to be matched with a team.",
    },
    {
      id: 2,
      title: "Technology Stack:",
      content:
        " Choose a technology stack that aligns with your solution, promoting creativity across various platforms.",
    },
    {
      id: 3,
      title: "Open Collaboration:",
      content:
        "Foster collaboration by sharing insights and code snippets, whether you're a beginner or an experienced developer.",
    },
  ];
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setHoveredOption((prev) => (prev === id ? null : id));
  };
  return (
    <div className="w-[500px] flex flex-col justify-between p-4  bg_glass  text-white">
    <div> <h2 className="text-2xl font-semibold mb-4">Basic Rules</h2>
   
     {OPTIONS.map(({ id, title, content }) => (
       <div key={id} className="flex flex-col text-white relative">
         <div
           className={`    
        flex w-full flex-row-reverse gap-4 border-b cursor-pointer border-black p-3 items-center justify-between relative`}
           onClick={() => handleToggle(id)}
         >
           <div>
             {hoveredOption === id ? (
               <div className="text-[12px]">Click to Close</div>
             ) : (
               <div className="text-[12px]">Click to Open</div>
             )}
           </div>
           <div className="flex items-center gap-2">
             <span
               className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}
             >
               {id}
             </span>
             <span className="font-semibold text-[18px]">{title}</span>
           </div>
         </div>
         {hoveredOption === id && (
           <div
             className={`${styles.bounds} absolute top-[-75%]   z-[10000] mt-2 animate-fade-up`}
           >
             <Magnetic>
               <div
                 ref={ref}
                 className={`${styles.bounds} bg-black text-white p-2 rounded-md max-w-[500px] flex items-center gap-3 `}
                 onClick={() => handleToggle(id)}
               >
                 <div
                   className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}
                 >
                   {id}
                 </div>
                 <div className="w-[300px] break-words">{content}</div>
               </div>
             </Magnetic>
           </div>
         )}
       </div>
     ))}</div>
     <div>In any competition or event, rules serve as the guiding principles that ensure fair play, integrity, and a level playing field for all participants. Judges play a crucial role in interpreting and enforcing these rules, evaluating participants based on predetermined criteria, and ultimately determining winners.</div>
   </div>
  );
});

export default BasicRules;
