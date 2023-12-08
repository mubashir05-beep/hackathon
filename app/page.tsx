"use client";
import React, { useEffect, useRef } from "react";

import Encourage from "@/components/Encouragement/page";
import ShortEncouragementPage from "@/components/ShortEncouragement/Page";
import Theme from "@/components/Theme/page";
import StickyMouse from "@/components/StickyCursor/page";
import Steps from "@/components/HeroSteps/page";
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
          className="  -z-10 object-cover fixed rounded-lg"
          style={{ width: `calc(100% - 1rem)`, height: `calc(100% - 1rem)` }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col items-center gap-3 absolute top-24 justify-between w-screen px-6">
          <div className="flex max-[1122px]:flex-col     gap-3   ">
            <div className="">
              <Steps ref={stickyElement} />
            </div>
            {/* <Theme /> */}
          </div>
          <div className="flex flex-1">
            {/* <ShortEncouragementPage /> */}
          </div>
        </div>
      </div>
      <StickyMouse stickyElement={stickyElement} />
    </>
  );
};

export default Home;
