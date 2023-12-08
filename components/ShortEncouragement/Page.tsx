'use client'
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Option {
  id: number;
  title: string;
  content: string;
}

const ShortEncouragementPage: React.FC = () => {
  const [expandedOption, setExpandedOption] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedOption((prev) => (prev === id ? null : id));
  };

  const OPTIONS: Option[] = [
    {
      id: 1,
      title: "Learn and Apply:",
      content: "Gain hands-on experience in web development by tackling real-world challenges.",
    },
    {
      id: 2,
      title: "Showcase Your Creativity:",
      content: " Demonstrate your unique ideas and problem-solving skills through a beginner-friendly project.",
    },
    {
      id: 3,
      title: "Connect with Peers:",
      content: "Engage with a supportive community of fellow beginners and experienced mentors..",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-[500px] bg_glass p-3">
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex text-[18px] text-white font-extrabold">Become a part of:</div>

        {OPTIONS.map(({ id, title, content }) => (
          <div key={id} className="flex text-white flex-col">
            <div
              onClick={() => toggleExpand(id)}
              className="flex w-full flex-row-reverse gap-3 border-b cursor-pointer border-black p-2 items-center justify-between"
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

export default ShortEncouragementPage;
