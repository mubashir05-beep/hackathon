'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const CountdownPage = () => {
  const registrationEndDate = new Date("December 31, 2023 09:50:00").getTime();
  const submissionStartDate = new Date("December 1, 2024 09:55:50").getTime();
  const submissionEndDate = submissionStartDate + 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

  const [countdown, setCountdown] = useState(countdownTo(registrationEndDate));
  const [registrationMessage, setRegistrationMessage] = useState(
    "Time until Registration Expires!"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedCountdown = countdownTo(registrationEndDate);
      setCountdown(updatedCountdown);

      // Check if registration has completed
      if (updatedCountdown === "Countdown expired") {
        clearInterval(intervalId);
        setRegistrationMessage("The registration period has concluded.");

        // Set a timeout for submission start
        setTimeout(() => {
          setRegistrationMessage("Submission has commenced!");

          // Start a new countdown for the submission period
          const submissionIntervalId = setInterval(() => {
            const submissionCountdown = countdownTo(submissionEndDate);
            setCountdown(submissionCountdown);

            // Check if the submission period has ended
            if (submissionCountdown === "Countdown expired") {
              clearInterval(submissionIntervalId);
              setRegistrationMessage("The submission period has concluded.");
            }
          }, 1000);
        }, submissionStartDate - Date.now());
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [registrationEndDate, submissionStartDate, submissionEndDate]);

  function countdownTo(targetDateTime: any) {
    const now = new Date().getTime();
    const timeDifference = targetDateTime - now;

    if (timeDifference <= 0) {
      return "Countdown expired";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div className="bg_glass w-[500px] max-[1595px]:w-full flex flex-col gap-3 text-white p-4 h-full">
      <div className=" flex flex-col">
        <div className="text-[30px] font-semibold  max-[455px]:text-[24px]">Countdown </div>
        <div className="text-[45px]  max-[455px]:text-[30px] font-bold">{countdown}</div>
        <div>{registrationMessage}</div>
      </div>
      <div>
        {registrationMessage === "Time until Registration Expires!" ? (
          <div className="flex items-center justify-between bg-black p-3 rounded-[16px] ">
            <div className="text-gray-400 max-[455px]:hidden">Click to Register Now!</div>
            <div className="flex items-center text-black w-fit bg-gray-100 h-[56px] p-4 rounded-full gap-2 ">
              <Link href={"/contact"} className="">
                Registration
              </Link>
              <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
                <FiExternalLink />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center  max-[455px]:flex-col  justify-between bg-black p-3 rounded-[16px] ">
            <div className="text-gray-400 max-[455px]:hidden">Click to Submit Now!</div>
            <div className="flex items-center text-black w-fit bg-gray-100 h-[56px] p-4 rounded-full gap-2 ">
              <Link href={"/contact"} className="">
                Submission
              </Link>
              <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
                <FiExternalLink />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownPage;
