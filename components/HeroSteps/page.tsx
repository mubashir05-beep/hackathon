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
      title: "Explore & Understand",
      content:
        "Dive into the hackathon universe. Discover the rules, themes, and essential details that will guide your innovative endeavors.",
    },
    {
      id: 2,
      title: "Secure Your Spot!",
      content:
        "Register for the hackathon to ensure your participation. Fill out the registration form and stay connected for event updates and announcements",
    },
    {
      id: 3,
      title: "Develop & Submit",
      content:
        "Bring your ideas to life! Utilize this section to submit your project. Provide detailed information and documentation showcasing the brilliance of your creation.",
    },
    {
      id: 4,
      title: "Discover Innovations",
      content:
        "Immerse yourself in a gallery of all projects submitted by talented participants. Witness a showcase of inventive solutions and ideas that emerged during the hackathon.",
    },
  ];
  const [expandedOption, setExpandedOption] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedOption === id) {
      setExpandedOption(null); // Close the currently open tab
    } else {
      setExpandedOption(id); // Open the clicked tab
    }
  };

  return (
    <div className="flex flex-col w-[450px] text-white p-3 gap-3 bg_glass">
      <div className="font-bold text-white text-[20px]">
        <span className="text-[40px] text-white font-extrabold mix-blend-difference">Hackathon Journey:</span>
        <br /> From Registration to Innovation
      </div>
      {OPTIONS.map(({ id, title, content }) => (
        <div key={id} className="flex flex-col ">
          <div
            onClick={() => toggleExpand(id)}
            className="flex w-full flex-row-reverse gap-8 border-b cursor-pointer border-black p-3 items-center justify-between"
          >
            <div>
              {expandedOption === id ? <FaArrowUp /> : <FaArrowDown />}
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
          {expandedOption === id && <p className="px-3 text-[15px] pt-2">{content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Page;
