"use client";
import React, { useEffect, useRef } from "react";
import ShortEncouragementPage from "@/components/ShortEncouragement/Page";
import Theme from "@/components/Theme/page";
import StickyMouse from "@/components/StickyCursor/page";
import Criteria from "@/components/Criteria/page";
import BasicRules from "@/components/Rules/page";
import Countdown from "@/components/Countdown/page";

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
      <div className="flex items-center flex-col  absolute  top-0 bottom-0 left-0 right-0 justify-center ">
        <video
          autoPlay
          loop
          muted
          className="-z-10 object-cover fixed rounded-lg"
          style={{ width: `calc(100% - 1rem)`, height: `calc(100% - 1rem)` }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="flex flex-col gap-4   w-screen px-6"
          // style={{ height: `max-[1595px]:calc(100vh - 7.5rem)` }}
        >
          <div className="flex  max-[1595px]:flex-col gap-4">
            <Theme />
            <div className="flex gap-4 h-full ">
              <BasicRules />
              <Criteria />
            </div>
          </div>
          <div className="flex h-full max-[1595px]:flex-col gap-4">
            <ShortEncouragementPage />
            <div className="flex gap-4 h-full ">
              <Countdown />
              <Countdown />
            </div>
          </div>
        </div>
      </div>
      <StickyMouse stickyElement={stickyElement} />
    </>
  );
};

export default Home;
