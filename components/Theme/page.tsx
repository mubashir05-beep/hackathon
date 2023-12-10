import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const page = () => {
  return (
    <div className="flex flex-col gap-4 p-4 justify-between min-w-[500px] text-white bg_glass ">
      <div className="flex flex-col gap-2 ">
      <div className="text-[28px]  font-bold">Theme for the Hackathon:</div>
        <div className="font-bold text-white text-[20px]">
          <span className="text-[40px] text-white font-extrabold mix-blend-difference">
            Crafting Solutions:
          </span>
          <br /> Building User-Friendly Applications
        </div>
      </div>
     
      <div className=" flex flex-col gap-2 ">
        <div className="text-[28px]  font-bold">Goal:</div>
        <div className="text-[15px]">
          Inspire innovation and collaboration across diverse skill levelsby
          inviting participants to craft solutions that tackle everyday
          challenges. This hackathon encourages the development of user-friendly
          applications that prioritize intuitiveness, accessibility, and
          adaptability for users with varying technical expertise.
        </div>
      
      </div>
  
      
      

     
    </div>
  );
};

export default page;
