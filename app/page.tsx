"use client";
import React, { useEffect } from "react";
import Steps from "@/components/HeroSteps/page";
// import Encourage from "@/components/Encouragement/page";
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

  return (
    <div className="flex items-center flex-col  absolute  top-0 bottom-0 left-0 right-0 justify-center w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        className="  -z-10 object-cover rounded-lg"
        style={{ width: `calc(100% - 1rem)`, height: `calc(100% - 1rem)` }}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="flex max-[1260px]:flex-col items-center gap-9 absolute justify-between w-screen px-6">
        <div className="flex w-full  ">
          <Steps />
         
        </div>
   
        <div className="flex w-full flex-col ">
          {/* <Encourage /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
