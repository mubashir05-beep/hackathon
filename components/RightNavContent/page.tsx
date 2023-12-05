import React from "react";
import Link from "next/link";
import { GrAggregate } from "react-icons/gr";
import Menu from "./Menu";

const page = () => {
  return (
    <>
      <div className=" flex items-center max-[620px]:hidden bg-gray-100 h-[56px] mx-4 p-4 rounded-full gap-2 ">
        <Link href={"/contact"} className="">
          Contact
        </Link>
        <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
          {" "}
          <GrAggregate />
        </div>
      </div>
      <Menu />
    </>
  );
};

export default page;
