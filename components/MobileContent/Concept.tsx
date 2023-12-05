// "use client";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setOption, nextOption, prevOption } from "@/slices/counterSlice";
// import Link from "next/link";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { usePathname } from "next/navigation";

// const OPTIONS = [
//   { id: 1, title: "Overview & Details", link: "" },
//   { id: 2, title: "Registration", link: "registration" },
//   { id: 3, title: "Submit Project", link: "submission" },
//   { id: 4, title: "All Projects", link: "all-projects" },
// ];

// const Page = () => {
//   const pathname = usePathname();
//   const dispatch = useDispatch();
//   const selectedOption = useSelector((state: any) => state.option.value);

//   const handleTraverse = async (direction: "prev" | "next") => {
//     if (direction === "next" && selectedOption < OPTIONS.length - 1) {
//       dispatch(nextOption());
//     } else if (direction === "prev" && selectedOption > 0) {
//       dispatch(prevOption());
//     }
//   };

//   return (
//     <div className="flex items-center justify-center  gap-4 bg-black z-50 text-white rounded-md mx-4 p-4">
//       <div
//         className="flex items-center cursor-pointer justify-center flex-col"
//         onClick={() => handleTraverse(2)}
//       >
//         <FaAngleLeft />
//         <span className="text-[14px]">Prev</span>
//       </div>

//       {OPTIONS.map(({ id, title, link }) => (
//         <React.Fragment key={id}>
//           {selectedOption === id && (
//             <Link href={`/${link}`} className={`text-white`}>
//               {title}
//             </Link>
//           )}
//         </React.Fragment>
//       ))}

//       <div className="flex items-center cursor-pointer justify-center flex-col">
//         <FaAngleRight />
//         <span className="text-[14px]" onClick={() => handleTraverse("next")}>
//           Next
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Page;
