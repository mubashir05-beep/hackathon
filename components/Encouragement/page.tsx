'use client'
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Option {
  id: number;
  title: string;
  content: string;
}

const EncouragementPage: React.FC = () => {
  const [expandedOption, setExpandedOption] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedOption((prev) => (prev === id ? null : id));
  };

  const OPTIONS: Option[] = [
    {
      id: 1,
      title: "Inclusive Learning",
      content: "Beginners find mentors, seniors share wisdom.",
    },
    {
      id: 2,
      title: "Diverse Skills",
      content: "All levels celebrated, from novice to pro.",
    },
    {
      id: 3,
      title: "Collective Growth",
      content: "Learn, collaborate, and grow together.",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full bg_glass p-3">
      <div className="flex flex-col gap-3">
        <div className="font-bold text-white text-[20px]">
          <span className="text-[40px] font-extrabold">Unleash Your Potential:</span>
          <br /> Open to All Skill Levels!
        </div>
        <div className="text-[15px] text-white">
          Get ready for an amazing hackathon tailored for both coding newcomers and seasoned seniors. 🚀
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex text-[18px] text-white font-extrabold">Become a part of:</div>
        {OPTIONS.map(({ id, title, content }) => (
          <div key={id} className="flex text-white flex-col">
            <div
              onClick={() => toggleExpand(id)}
              className="flex w-full flex-row-reverse gap-3 border-b cursor-pointer border-black p-3 items-center justify-between"
            >
              <div>{expandedOption === id ? <FaArrowUp /> : <FaArrowDown />}</div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}>
                  {id}
                </span>
                <span className="font-semibold text-[18px]">{title}</span>
              </div>
            </div>
            {expandedOption === id && <p className="px-3 text-[15px] pt-2">{content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EncouragementPage;
