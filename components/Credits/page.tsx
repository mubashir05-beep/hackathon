import React from "react";
import Link from "next/link";
import { Arizonia } from "next/font/google";
const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className="bg_glass w-[500px] max-[1595px]:w-full flex flex-col justify-between gap-3 text-white text-[18px] p-4 h-full">
     <h2 className="text-2xl font-semibold mb-4">Our Aim</h2>
     <div className="text-[15px]">The InnoJam 2023 is an event organized by BSSE-5A and hosted at BIMS. The reason for conducting such an event is to provide a stage for talent and build a strong community driven by a passion for coding and related technical pursuits. Here's the list of contributors who voluntarily contributed and made this event come alive as it is now.
    </div>
    </div>
  );
};

export default page;
