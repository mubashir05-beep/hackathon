"use client";
import React, { useEffect, useRef } from "react";

import Encourage from "@/components/Encouragement/page";
import ShortEncouragementPage from "@/components/ShortEncouragement/Page";
import Theme from "@/components/Theme/page";
import StickyMouse from "@/components/StickyCursor/page";
import Steps from "@/components/HeroSteps/page";
import Criteria from "@/components/Criteria/page";

import BasicRules from "@/components/Rules/page";
const Home = () => {
  useEffect(() => {
    const videoElement = document.getElementsByTagName("video")[0];

    const handleVideoEnded = () => {
      videoElement.load();
      videoElement.play();
    };

    videoElement.addEventListener("ended", handleVideoEnded);

    return () => {
      // Cleanup to remove the event listener when the component unmounts
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);
  const stickyElement = useRef(null);
  return (
    <>
      <div className="flex items-center flex-col  absolute  top-0 bottom-0 left-0 right-0 justify-center w-screen h-screen">
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
          className="flex flex-col gap-4 absolute top-24 justify-center w-screen px-6"
          style={{ height: `calc(100vh - 7.5rem)` }}
        >
          <div className="flex h-full gap-4">
            <Theme />
            
            <div className="flex gap-4 h-full ">
              <BasicRules />
              <Criteria />
              
            </div>
          </div>
          <div className="flex  ">
            <ShortEncouragementPage />
          </div>
        </div>
      </div>
      <StickyMouse stickyElement={stickyElement} />
    </>
  );
};

export default Home;
