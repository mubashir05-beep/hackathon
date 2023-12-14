"use client";

import React, { useState, forwardRef } from "react";
import Magnetic from "../Framer";
import styles from "./style.module.scss";
interface Option {
  id: number;
  title: string;
  content: string;
}
const Criteria: React.FC = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const OPTIONS: Option[] = [
    {
      id: 1,
      title: "Innovation and Creativity:",
      content:
        "Originality and creativity in the participant's work or project.",
    },
    {
      id: 2,
      title: "Technology Stack:",
      content:
        "Effective use of a technology stack aligned with the solution, showcasing creativity across platforms.",
    },
    {
      id: 3,
      title: "Collaborative Spirit:",
      content:
        "Fostering collaboration through shared insights and code snippets, promoting inclusivity for developers of all levels.",
    },
  ];

  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setHoveredOption((prev) => (prev === id ? null : id));
  };
  return (
    <div className="w-[500px]  max-[1595px]:w-full flex flex-col justify-between p-4 gap-4  bg_glass  text-white">
      <div>
        {" "}
        <h2 className="text-2xl font-semibold mb-4">Judging Criteria</h2>
        {OPTIONS.map(({ id, title, content }) => (
          <div key={id} className="flex flex-col text-white relative">
            <div
              className={`    
        flex w-full flex-row-reverse gap-4 border-b cursor-pointer border-black p-3 items-center justify-between relative`}
              onClick={() => handleToggle(id)}
            >
              <div>
              {hoveredOption === id ? (
                <>
                <div className="text-[12px] max-[450px]:hidden">Click to Close</div>
                <div className="text-[12px] min-[450px]:hidden"> Close</div>
                </>  ) : (
                  <>
                <div className="text-[12px] max-[450px]:hidden">Click to Open</div>
                <div className="text-[12px] min-[450px]:hidden"> Open</div>
                </>  )}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}
                >
                  {id}
                </span>
                <span className="font-semibold text-[18px] max-[455px]:text-[15px]">{title}</span>
              </div>
            </div>
            {hoveredOption === id && (
        <div
          className={`${styles.bounds} absolute top-[-75%]   z-[10000] mt-2 animate-fade-up`}
        >
          <Magnetic>
            <div
              ref={ref}
              className={`${styles.bounds} bg-black text-white p-2 rounded-md max-w-[500px] max-[420px]:w-[250px] flex items-center gap-3 `}
              onClick={() => handleToggle(id)}
            >
              <div
                className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}
              >
                {id}
              </div>
              <div className="w-[300px] break-words text-[15px] max-[420px]:w-[200px]">{content}</div>
            </div>
          </Magnetic>
        </div>
      )}
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-col">
        <div className="text-[18px]  font-bold">Note:</div>
        <div className="text-[15px]">
          Please remember that functionality carries the most weight at 40%,
          followed by innovation (20%), technical complexity (15%), and, each
          accounting for 10%. Best of luck!
        </div>
      </div>
    </div>
  );
});
Criteria.displayName = 'BasicRules';
export default Criteria;
