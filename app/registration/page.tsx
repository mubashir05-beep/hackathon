"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { CldVideoPlayer } from "next-cloudinary";
const Page = () => {
  useEffect(() => {
    const videoElement = document.getElementsByTagName("video")[0];
    const handleVideoEnded = () => {
      videoElement.load();
      videoElement.play();
    };
    videoElement.addEventListener("ended", handleVideoEnded);
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <>
      <div className=" w-full absolute top-0 bottom-0 left-0 right-0 px-2 gap-8 bg-black flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full rounded-lg"
          style={{ height: `calc(100% - 1rem)` }}
        >
          <source src="https://res.cloudinary.com/duj9xqxpc/video/upload/q_auto/vc_vp9/yz3yg9hfeqzs7pjihzr3.webm?_s=vp-1.10.1" />
        </video>

        <div className=" mx-4 w-full">
          {" "}
          <form className=" mx-4 w-full">
            <div className="flex items-center flex-col gap-4">
              {/* Team Info */}
              <div className="flex items-center  gap-5 w-full">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_Team_Name"
                    id="floating_Team_Name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_Team_Name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Team Name
                  </label>
                </div>
                <div className="relative z-0 w-2/6 mb-5 group">
                  <input
                    type="text"
                    name="floating_Team_Member"
                    id="floating_Team_Member"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_Team_Member"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Team Members
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    name="floating_Team_Name"
                    id="floating_Team_Name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    required
                  />
                  <label
                    htmlFor="floating_Team_Name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Team Members(Click "Add" to add!)
                  </label>

                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="absolute right-2 top-2 px-2 py-1 text-white text-[14px]"
                  >
                    Add
                  </button>
                </div>
                {tags.length > 0 && (
                  <div className="flex items-center gap-4">
                    <div className="text-gray-400 ">Members:</div>
                    <div className="max-w-[600px] flex flex-wrap items-center gap-2">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className="bg-white flex items-center gap-2  text-black rounded px-2 py-1 m-1"
                      >
                        <div className="text-[15px]">{tag}</div>
                        <button
                          className="border-black border  rounded-xl hover:bg-white hover:text-black"
                          onClick={() => removeTag(index)}
                        >
                          <RxCross2/>
                        </button>
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Leader Info */}
              <div className="flex items-center  gap-5 w-full">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_Leader_Name"
                    id="floating_Leader_Name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_Leader_Name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Leader Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_Section"
                    id="floating_Section"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_Section"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Section
                  </label>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center  gap-5 w-full">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_Email"
                    id="floating_Email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_Email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
