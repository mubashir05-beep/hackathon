import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "@/slices/counterSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrAggregate } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { toggleOption } from "@/slices/menuSlice";
const Page = () => {
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
    <div className="bg-white fixed animate-fade animate-duration-[900ms] animate-delay-900 animate-ease-linear animate-fill-both top-0 px-4 -z-10  py-28 left-0 right-0 bottom-0">
      <div className="flex flex-col gap-4">
        {OPTIONS.map(({ id, title, link }) => {
          handlePathName(id, link);
          return (
           <React.Fragment key={id}>
  {selectedOption === id ? (
    <Link href={`/${link}`} className="flex items-center animate-pulse   animate-duration-400 animate-ease-linear animate-fill-both rounded bg-black text-white py-4 px-2 ">
      <Link
        href={`/${link}`}
        className={`rounded-full text-black h-6 w-6 bg-white text-center font-semibold cursor-pointer`}
        onClick={() => handleOptionClick(id)}
      >
        {id}
      </Link>
      <div>
        <Link
          href={`/${link}`}
          onClick={() => handleOptionClick(id)}
          className={` ml-3  font-semibold `}
        >
          {title}
        </Link>
      </div>
    </Link>
  ) : (
    <Link href={`/${link}`} className="flex items-center   border-y py-4 px-2">
      <Link
        href={`/${link}`}
        className={`rounded-full text-white h-6 w-6 bg-black text-center cursor-pointer`}
        onClick={() => handleOptionClick(id)}
      >
        {id}
      </Link>
      <div>
        <Link
          href={`/${link}`}
          onClick={() => handleOptionClick(id)}
          className={` ml-3 font-semibold `}
        >
          {title}
        </Link>
      </div>
    </Link>
  )}
</React.Fragment>

          );
        })}
        <div className="flex items-center gap-2 mt-8 justify-center">
          <div className="flex items-center min-[621px]:hidden max-[1370px]:flex bg-gray-100 h-[56px] p-4 rounded-full gap-2">
            <div>Contact</div>

            <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
              <GrAggregate />
            </div>
          </div>
          <div className="flex items-center min-[621px]:hidden max-[1370px]:flex bg-gray-100 h-[56px]  p-4 rounded-full gap-2">
            <div>Contributors</div>

            <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
              <FaPeopleGroup />
            </div>
          </div>
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
