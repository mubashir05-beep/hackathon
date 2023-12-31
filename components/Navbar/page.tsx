import React from "react";
import CenterContent from "@/components/CenterContent/page";
import RightNavContent from "@/components/RightNavContent/page";
import LeftNavContent from "@/components/LeftNavContent/page";
const Page = () => {
  return (
    <div className="flex items-center animate-fade animate-once justify-between w-full my-4 px-2 z-10  fixed top-2 ">
      <LeftNavContent />

      <RightNavContent />
    </div>
  );
};

export default Page;
