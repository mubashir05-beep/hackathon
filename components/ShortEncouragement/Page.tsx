"use client";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import React, { useState, forwardRef } from "react";
import Magnetic from "../Framer";
import styles from "./style.module.scss";
interface Option {
  id: number;
  title: string;
  content: string;
}

const ShortEncouragementPage = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setHoveredOption((prev) => (prev === id ? null : id));
  };
  const OPTIONS: Option[] = [
    {
      id: 1,
      title: "Learn and Apply:",
      content:
        "Gain hands-on experience in web development by tackling real-world challenges.",
    },
    {
      id: 2,
      title: "Showcase Your Creativity:",
      content:
        " Demonstrate your unique ideas and problem-solving skills through a beginner-friendly project.",
    },
    {
      id: 3,
      title: "Connect with Peers:",
      content:
        "Engage with a supportive community of fellow beginners and experienced mentors..",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full bg_glass p-4">
      <div className="flex flex-col gap-1 pt-2">
        <div className="flex text-[18px] text-white font-extrabold">
          Why join us?
        </div>
        {
  OPTIONS.map(({ id, title, content }) => (
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
  ))
}
      </div>
    </div>
  );
});

export default ShortEncouragementPage;
