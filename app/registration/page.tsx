"use client";
import React, { useEffect } from "react";

import { CldVideoPlayer } from "next-cloudinary";
const page = () => {
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
        <form className=" mx-4 w-full">
          <div className="flex items-center flex-col gap-4">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
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
    </>
  );
};

export default page;
