import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const page = () => {
  return (
    <div className="flex flex-col gap-4 p-4 justify-between min-w-[500px] text-white bg_glass ">
      <div className="flex flex-col gap-4 ">
        <div className="text-[18px] font-semibold ">Theme for the Hackathon:</div>
        <div className="font-bold text-white text-[20px]">
          <span className="text-[40px] text-white font-extrabold mix-blend-difference">
            Crafting Solutions:
          </span>
          <br /> Building User-Friendly Applications
        </div>
      </div>
      <div className="flex items-center gap-4">
      <div className=" text-[18px] flex flex-col gap-4 ">
        <div className="text-[18px]  font-semibold">Goal:</div>
        <div className="">
          Inspire innovation and collaboration across diverse skill levelsby
          inviting participants to craft solutions that tackle everyday
          challenges. This hackathon encourages the development of user-friendly
          applications that prioritize intuitiveness, accessibility, and
          adaptability for users with varying technical expertise.
        </div>
      
      </div>
      {/* <div className="flex items-end justify-center bg-black rounded h-full p-4 ">
      <div className="flex items-center max-[620px]:hidden bg-gray-100 h-[56px] mx-4 p-4 rounded-full gap-2 ">
        <Link href={"/contact"} className="text-black">
          Registration
        </Link>
        <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
          {" "}
          <FiExternalLink />
        </div>
      </div>
      </div> */}
  


      </div>
      

     
    </div>
  );
};

export default page;
