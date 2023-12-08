import React, { useState, forwardRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import styles from "./style.module.scss";
import Magnetic from "../Framer";
interface Option {
  id: number;
  title: string;
  content: string;
}

const Steps = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredOption(id);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  return (
    <div className="flex flex-col w-[450px] text-white p-3 gap-3 bg_glass">
      <div className="font-bold text-white text-[20px]">
        <span className="text-[40px] text-white font-extrabold mix-blend-difference">
          Hackathon Journey:
        </span>
        <br /> From Registration to Innovation
      </div>
      {OPTIONS.map(({ id, title, content }) => (
        <div key={id} className="flex flex-col relative">
          <div
            className={`    
             flex w-full flex-row-reverse gap-8 border-b cursor-pointer border-black p-3 items-center justify-between relative`}
            onMouseEnter={() => handleMouseEnter(id)}
          >
            <div>
              {hoveredOption === id ? (
                <FaArrowUp size={18} onClick={() => handleMouseLeave()} />
              ) : (
                <FaArrowDown size={18} onClick={() => handleMouseEnter(id)} />
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
              className={`${styles.bounds} absolute   z-[10000] mt-2 animate-fade-up`}
            >
              <Magnetic>
                <div
                  ref={ref}
                  className={`${styles.bounds} bg-black text-white p-2 rounded-md max-w-[500px] flex items-center gap-3 `}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleMouseLeave()}
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
      ))}
    </div>
  );
});
Steps.displayName = 'Steps';
export default Steps;
