import React from "react";
import CenterContent from '@/components/CenterContent/page'
import RightNavContent from "@/components/RightNavContent/page"
import LeftNavContent from '@/components/LeftNavContent/page'
const Page = () => {
  return (
    <div className="flex items-center animate-fade animate-once justify-between w-full my-4  sticky top-4 ">
      <LeftNavContent/>
      <div className="max-[1370px]:hidden"> <CenterContent/></div>
     
      <RightNavContent/>
      </div>
  );
};

export default Page;
