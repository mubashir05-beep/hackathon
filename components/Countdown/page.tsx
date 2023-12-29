import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const CountdownPage = () => {
  const registrationEndDate = new Date("December 31, 2023 09:50:00").getTime();
  const submissionStartDate = new Date("December 1, 2024 09:55:50").getTime();
  const submissionEndDate = submissionStartDate + 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

  const [countdown, setCountdown] = useState("Calculating...");
  const [registrationMessage, setRegistrationMessage] = useState(
    "Time until Registration Expires!"
  );

  useEffect(() => {

    const updateCountdown = () => {
      const now = new Date().getTime();
      let targetDateTime, message;

      if (now < registrationEndDate) {
        targetDateTime = registrationEndDate;
        message = "Time until Registration Expires!";
      } else if (now < submissionStartDate) {
        targetDateTime = submissionStartDate;
        message = "Submission has commenced!";
      } else if (now < submissionEndDate) {
        targetDateTime = submissionEndDate;
        message = "The submission period has concluded.";
      } else {
        setCountdown("Countdown expired");
        return;
      }

      const timeDifference = targetDateTime - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      setRegistrationMessage(message);
    };

    // Initial call to update the countdown
    updateCountdown();

    // Set interval to update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [registrationEndDate, submissionStartDate, submissionEndDate]);

  return (
    <div className="bg_glass w-[500px] max-[1595px]:w-full flex flex-col gap-3 text-white p-4 h-full">
      <div className=" flex flex-col">
        <div className="text-[30px] font-semibold max-[455px]:text-[24px]">
          Countdown
        </div>
        <div className="text-[45px] max-[455px]:text-[30px] font-bold">
          {countdown}
        </div>
        <div>{registrationMessage}</div>
      </div>
      <div>
        {registrationMessage === "Time until Registration Expires!" ? (
          <div className="flex items-center justify-between bg-black p-3 rounded-[16px] ">
            <div className="text-gray-400 max-[455px]:hidden">
              Click to Register Now!
            </div>
            <div className="flex items-center text-black w-fit bg-gray-100 h-[56px] p-4 rounded-full gap-2 ">
              <Link href={"/registration"} className="">
                Registration
              </Link>
              <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
                <FiExternalLink />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center max-[455px]:flex-col justify-between bg-black p-3 rounded-[16px] ">
            <div className="text-gray-400 max-[455px]:hidden">
              Click to Submit Now!
            </div>
            <div className="flex items-center text-black w-fit bg-gray-100 h-[56px] p-4 rounded-full gap-2 ">
              <Link href={"/submission"} className="">
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
