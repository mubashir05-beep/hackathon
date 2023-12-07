"use client";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Option {
  id: number;
  title: string;
  content: string;
}

const Page: React.FC = () => {
  const OPTIONS: Option[] = [
    {
      id: 1,
      title: "Overview & Details",
      content:
        "Dive into the hackathon universe. Discover the rules, themes, and essential details that will guide your innovative endeavors.",
    },
    {
      id: 2,
      title: "Registration",
      content:
        "Register for the hackathon to ensure your participation. Fill out the registration form and stay connected for event updates and announcements",
    },
    {
      id: 3,
      title: "Submit Project",
      content:
        "Bring your ideas to life! Utilize this section to submit your project. Provide detailed information and documentation showcasing the brilliance of your creation.",
    },
    {
      id: 4,
      title: "All Projects",
      content:
        "Immerse yourself in a gallery of all projects submitted by talented participants. Witness a showcase of inventive solutions and ideas that emerged during the hackathon.",
    },
  ];

  const [expandedOptions, setExpandedOptions] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    if (expandedOptions.includes(id)) {
      setExpandedOptions(expandedOptions.filter((optionId) => optionId !== id));
    } else {
      setExpandedOptions([...expandedOptions, id]);
    }
  };

  return (
    <div className="flex flex-col  p-8 gap-8 bg_glass">
      <div className="font-bold text-[20px]">
        <span className="text-[50px] font-extrabold">Hackathon Journey:</span>
        <br></br> From Registration to Innovation
      </div>
      {OPTIONS.map(({ id, title, content }) => (
        <div key={id} className="flex flex-col  ">
          <div
            onClick={() => toggleExpand(id)}
            className="flex  w-full flex-row-reverse gap-8 border-b cursor-pointer bg-white p-3 items-center justify-between"
          >
            <div>
              {expandedOptions.includes(id) ? <FaArrowUp /> : <FaArrowDown />}
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full text-white h-6 w-6 bg-black text-center cursor-pointer`}
              >
                {id}
              </span>
              <span className="font-semibold">{title}</span>
            </div>
          </div>
          {expandedOptions.includes(id) && (
            <p className="px-3 py-1">{content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
