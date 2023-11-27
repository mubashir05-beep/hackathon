"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "@/slices/counterSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

const OPTIONS = [
  { id: 1, title: "Overview & Details", link: "" },
  { id: 2, title: "Registration", link: "registration" },
  { id: 3, title: "Submit Project", link: "submission" },
  { id: 4, title: "All Projects", link: "all-projects" },
];

const Page = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: any) => state.option.value);

  const handlePathName = async (id: number, link: string) => {
    if (pathname === `/${link}`) {
     return await dispatch(setOption(id));
    }
  };

  const handleOptionClick = (id: any) => {
    dispatch(setOption(id));
  };

  return (
    <div className="flex items-center justify-center space-x-4 bg-black z-50 text-white rounded-md  p-4">
      {OPTIONS.map(({ id, title, link }) => {
        handlePathName(id, link);
        return (
          <React.Fragment key={id}>
            <div className="flex items-center">
              <Link
                href={`/${link}`}
                className={`rounded-full text-black h-6 w-6 bg-white text-center cursor-pointer`}
                onClick={() => handleOptionClick(id)}
              >
                {id}
              </Link>
              <div className="relative">
                {selectedOption === id && (
                  <Link href={`/${link}`} className={`text-white ml-2`}>
                    {title}
                  </Link>
                )}
              </div>
            </div>

            {id < 4 && (
              <div className="h-[1px] flex-1 flex w-[150px] bg-white"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Page;
