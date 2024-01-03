"use client";
import React, { Suspense, useEffect, useRef } from "react";
import ShortEncouragementPage from "@/components/ShortEncouragement/Page";
import Theme from "@/components/Theme/page";
import StickyMouse from "@/components/StickyCursor/page";
import Criteria from "@/components/Criteria/page";
import BasicRules from "@/components/Rules/page";
import Countdown from "@/components/Countdown/page";
import Credits from '@/components/Credits/page'

import Loading from "./loading";
const Home = () => {
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
  const stickyElement = useRef(null);
  return (
    <>
    <div className="bg-black h-[8px] w-screen top-0 left-0 right-0 fixed z-[5]"></div>
      <div className="flex items-center flex-col  absolute  top-0 bottom-0 left-0 right-0 justify-center ">
        <video
          autoPlay
          loop
          muted
          className="-z-10 object-cover fixed rounded-lg"
          style={{ width: `calc(100% - 1rem)`, height: `calc(100% - 1rem)` }}
        >
          <source src="https://res.cloudinary.com/duj9xqxpc/video/upload/q_auto/vc_vp9/fio0elnbjaaqhfwzc1vz.webm?_s=vp-1.10.1"  />
        </video>
        <div className="flex flex-col gap-4 top-24 absolute  min-[1595px]:bottom-6 pb-6  min-[1595px]:justify-center  px-6">
          <div className="flex  max-[1595px]:flex-col h-fit gap-4">
            <Theme />
            <div className="flex gap-4 max-[1595px]:flex-col  max-[1595px]:hidden  ">
              <BasicRules />
              <Criteria />
            </div>
          </div>
          <div className="flex  max-[1595px]:flex-col-reverse h-fit gap-4">
            <ShortEncouragementPage />
            <div className="flex gap-4  max-[1595px]:flex-col  ">
              <Countdown />
              <Credits />
              <div className="hidden gap-4 max-[1595px]:flex-col  max-[1595px]:flex  ">
              <BasicRules />
              <Criteria />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[8px] w-screen bottom-0 left-0 z-[5] right-0 fixed "></div>
      <StickyMouse stickyElement={stickyElement} />
    </>
  );
};

export default Home;
