import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "@/slices/counterSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
const page = () => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  const OPTIONS = [
    { id: 1, title: "Overview & Details", link: "" },
    { id: 2, title: "Registration", link: "registration" },
    { id: 3, title: "Submit Project", link: "submission" },
    { id: 4, title: "All Projects", link: "all-projects" },
  ];
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
    <div className="bg-white fixed top-0 px-4 -z-10  py-28 left-0 right-0 bottom-0">
      <div className="flex flex-col gap-8">
        {OPTIONS.map(({ id, title, link }) => {
          handlePathName(id, link);
          return (
            <React.Fragment key={id}>
              {selectedOption === id ? (
                <div className="flex items-center rounded bg-black text-white py-4 px-2 ">
                  <Link
                    href={`/${link}`}
                    className={`rounded-full text-black h-6 w-6 bg-white text-center font-semibold cursor-pointer`}
                    onClick={() => handleOptionClick(id)}
                  >
                    {id}
                  </Link>
                  <div>
                    <Link href={`/${link}`} className={` ml-3  font-semibold`}>
                      {title}
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center px-2">
                  <Link
                    href={`/${link}`}
                    className={`rounded-full  text-white h-6 w-6 bg-black text-center cursor-pointer`}
                    onClick={() => handleOptionClick(id)}
                  >
                    {id}
                  </Link>
                  <div>
                    <Link
                      href={`/${link}`}
                      className={` ml-3  font-semibold  `}
                    >
                      {title}
                    </Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default page;
