import React from "react";
import Link from "next/link";
import { GrAggregate } from "react-icons/gr";

const page = () => {
  return (
    <Link
      href={"/"}
      className=" font-semibold mx-4 bg-black h-[56px] text-white rounded p-2 "
    >
      <div className="flex flex-col items-center ">
        <div className="">InnoJam</div>
        <div className="text-[12px] gradient-text">2023</div>
      </div>
    </Link>
  );
};

export default page;
