import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-3 p-3  text-white bg_glass ">
      <div className=" ">
        <div className="text-[18px] font-semibold ">Theme for the Hackathon:</div>
        <div className="font-bold text-white text-[20px]">
          <span className="text-[40px] text-white font-extrabold mix-blend-difference">
            Crafting Solutions:
          </span>
          <br /> Building User-Friendly Applications
        </div>
      </div>
      <div className=" text-[18px] flex flex-col gap-3 ">
        <div className="text-[18px]  font-semibold">Goal:</div>
        <div className="">
          Inspire innovation and collaboration across diverse skill levelsby
          inviting participants to craft solutions that tackle everyday
          challenges. This hackathon encourages the development of user-friendly
          applications that prioritize intuitiveness, accessibility, and
          adaptability for users with varying technical expertise.
        </div>
      
      </div>

      <div className="">Learn more about <Link href={'/'} className="font-bold text-[19px]">Rules</Link> & <Link href={'/'} className="font-bold text-[19px]">Judging Criteria</Link> </div>
    </div>
  );
};

export default page;
