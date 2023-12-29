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
      title: "Learn and Apply",
      content:
        "Gain hands-on experience in web development by tackling real-world challenges.",
    },
    {
      id: 2,
      title: "Showcase Your Creativity",
      content:
        " Demonstrate your unique ideas and problem-solving skills through a beginner-friendly project.",
    },
    {
      id: 3,
      title: "Connect with Peers",
      content:
        "Engage with a supportive community of fellow beginners and experienced mentors..",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full bg_glass p-4">
      <div className="flex flex-col gap-4 pt-2">
        <div className="flex text-2xl text-white font-semibold">
          Why join us?
        </div>
        <div>
          {" "}
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
                      <div className="text-[12px] max-[450px]:hidden">
                        Click to Close
                      </div>
                      <div className="text-[12px] min-[450px]:hidden">
                        {" "}
                        Close
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-[12px] max-[450px]:hidden">
                        Click to Open
                      </div>
                      <div className="text-[12px] min-[450px]:hidden">
                        {" "}
                        Open
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}
                  >
                    {id}
                  </span>
                  <span className="font-semibold text-[18px] max-[455px]:text-[15px]">
                    {title}
                  </span>
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
                      <div className="w-[300px] break-words text-[15px] max-[420px]:w-[200px]">
                        {content}
                      </div>
                    </div>
                  </Magnetic>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
ShortEncouragementPage.displayName = "ShortEncouragementPage";
export default ShortEncouragementPage;
