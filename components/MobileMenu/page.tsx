import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "@/slices/counterSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrAggregate } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { toggleOption } from "@/slices/menuSlice";
const Page = () => {
  
  const OPTIONS = [
    { id: 1, title: "Overview & Details", link: "", disable: false },
    { id: 2, title: "Registration", link: "registration", disable: false },
    { id: 3, title: "Submission", link: "submission", disable: true },
    { id: 4, title: "All Projects", link: "all-projects", disable: true },
  ];

  const pathname = usePathname();
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: any) => state.option.value);
  const menuState = useSelector((state: any) => state.menutoggle.value); // Corrected selector

  const handlePathName = async (id: number, link: string) => {
    if (pathname === `/${link}`) {
      await dispatch(setOption(id));
    }
  };

  const handleOptionClick = async (id: number) => {
    await dispatch(setOption(id));
    await dispatch(toggleOption());
  };
  return (
    <div className="bg-white fixed duration-700 ease-in-out  transition-all min-[800px]:rounded-xl animate-delay-900 animate-ease-linear animate-fill-both top-4 px-4 -z-10  py-28 max-[800px]:right-0 max-[800px]:left-0 max-[800px]:bottom-0 max-[800px]:top-0  right-[16px]">
      <div className="flex flex-col gap-4">
        {OPTIONS.map(({ id, title, link, disable }) => {
          handlePathName(id, link);
          return (
            <React.Fragment key={id}>
              {selectedOption === id && disable != true ? (
                <Link
                  href={`/${link}`}
                  className={`flex items-center animate-pulse   animate-duration-700 animate-ease-linear animate-fill-both rounded bg-black text-white py-4 px-2  ${
                    disable && "pointer-events-none"
                  }`}
                  onClick={() => handleOptionClick(id)}
                  tabIndex={disable ? -1 : undefined}
                >
                  <Link
                    href={`/${link}`}
                    className={`rounded-full text-black h-6 w-6 bg-white text-center font-semibold cursor-pointer ${
                      disable && "pointer-events-none"
                    }`}
                    tabIndex={disable ? -1 : undefined}
                    onClick={() => handleOptionClick(id)}
                  >
                    {id}
                  </Link>
                  <div>
                    <Link
                      href={`/${link}`}
                      onClick={() => handleOptionClick(id)}
                      className={` ml-3  font-semibold ${
                        disable && "pointer-events-none"
                      }`}
                      tabIndex={disable ? -1 : undefined}
                      
                    >
                      {title}
                    </Link>
                  </div>
                </Link>
              ) : (
                <Link
                  href={`/${link}`}
                  className={`flex items-center   border-y py-4 px-2 ${
                    disable && "pointer-events-none"
                  } ${disable? "opacity-50 rounded" :" "}` }
                  tabIndex={disable ? -1 : undefined}
                  onClick={() => handleOptionClick(id)}
                >
                  <Link
                    href={`/${link}`}
                    className={`rounded-full text-white h-6 w-6 bg-black text-center cursor-pointer ${
                      disable && "pointer-events-none"
                    }`}
                    onClick={() => handleOptionClick(id)}
                    tabIndex={disable ? -1 : undefined}
                  >
                    {id}
                  </Link>
                  <div>
                    <Link
                      href={`/${link}`}
                      onClick={() => handleOptionClick(id)}
                      className={` ml-3 font-semibold  ${
                        disable && "pointer-events-none"
                      }`}
                      tabIndex={disable ? -1 : undefined}
                    >
                      {title}
                    </Link>
                  </div>
                </Link>
              )}
            </React.Fragment>
          );
        })}
        <div className="flex gap-4 mt-8  items-center ">
          <Link
            href={"/contact"}
            className="flex items-center bg-gray-100 h-[56px] p-4 rounded-full gap-2"
            onClick={() => {
              dispatch(toggleOption());
            }}
          >
            <div>Contact</div>

            <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
              <GrAggregate />
            </div>
          </Link>
          <Link
            href={"/contribute"}
            className="flex items-center bg-gray-100 h-[56px]  p-4 rounded-full gap-2"
            onClick={() => {
              dispatch(toggleOption());
            }}
          >
            <div>Contributors</div>

            <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
              <FaPeopleGroup />
            </div>
          </Link>
        </div>
      </div>{" "}
      {menuState && (
        <div className="absolute bottom-4 text-[14px] left-4">
          Designed and developed by{" "}
          <Link
            href={"https://github.com/mubashir05-beep"}
            className="font-semibold underline"
          >
            Mubashir
          </Link>
          .
        </div>
      )}
    </div>
  );
};

export default Page;
