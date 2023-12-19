"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiCircleInfo } from "react-icons/ci";

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
  const [formValues, setFormValues] = useState({
    teamName: "",
    teamMembers: "",
    teamMembersNumber: "",
    leaderName: "",
    section: "",
    aridNumber: "",
    email: "",
    phoneNumber: "",
  });

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
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation

    // Add more validation for other fields as needed

    // If all validation passes, you can submit the form
    console.log("Form submitted with values:", formValues);
  };

  const handleFormValueChange = (field: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
  return (
    <>
      <div className="bg-black h-[8px] w-screen top-0 left-0 right-0 fixed z-[10000000]"></div>
      <div className=" w-full  absolute top-0 bottom-0 left-0 right-0 px-2  max-[1024px]:flex-col-reverse bg-black flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="object-cover max-[1024px]:fixed w-full rounded-lg"
          style={{ width: `calc(100% - 1rem)`, height: `calc(100% - 1rem)` }}
        >
          <source src="https://res.cloudinary.com/duj9xqxpc/video/upload/q_auto/vc_vp9/yz3yg9hfeqzs7pjihzr3.webm?_s=vp-1.10.1" />
        </video>
        <div className="bg-black  max-[1024px]:hidden min-[1024px]:absolute flex items-center gap-4 p-4 min-[1024px]:max-w-[40%] mx-6 bg_glass bottom-6 left-6 text-white">
          <div>
            <CiCircleInfo size={30} />
          </div>

          <div className="text-[15px]">
            Kindly share information to the best of your knowledge, focusing
            solely on the names of participants. Only the team leader&apos;s Arid-ID,
            contact information, and class/section is necessary.
          </div>
        </div>
        <form
          className=" max-[1024px]:absolute max-[1024px]:top-24   w-full  text-white p-6 "
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col bg_glass p-4 gap-6">
            <div className="flex-col gap-2 pb-4 flex">
              <div className=" text-[34px] font-bold">Registration form</div>
              <p className=" text-gray-400 ">
                Lock in Your Spot: Register Now!
              </p>
            </div>
            {/* Team Info */}
            <div className="flex items-center max-[600px]:flex-col gap-3 w-full">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_Team_Name"
                  id="floating_Team_Name"
                  className="block py-2.5 px-0 w-full max-[] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white max-[1024px]:border-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("teamName", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_Team_Name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Team Name
                </label>
              </div>
              <div className="relative z-0 w-2/6 max-[600px]:w-full mb-5 group">
                <input
                  type="text"
                  name="floating_Team_Member"
                  id="floating_Team_Member"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 max-[1024px]:border-white border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("teamMembersNumber", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_Team_Member"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Team Members
                </label>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    handleFormValueChange("teamMembers", e.target.value);
                    handleInputChange(e);
                  }}
                  placeholder=""
                  name="floating_Team_Name"
                  id="floating_Team_Name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 max-[1024px]:border-white border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  
                />
                <label
                  htmlFor="floating_Team_Name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 max-[1024px]:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {tags.length > 0
                    ? `Total Team Members ${tags.length}`
                    : "Team Members"}
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
                <div className="flex min-[1024px]:items-center max-[1024px]:flex-col  gap-4">
                  <div className="text-gray-400 max-[1024px]:text-white ">
                    Members:
                  </div>
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
                          <RxCross2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Leader Info */}
            <div className="flex items-center max-[600px]:flex-col  gap-5 w-full">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_Leader_Name"
                  id="floating_Leader_Name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent max-[1024px]:border-white border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("leaderName", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_Leader_Name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white max-[1024px]:text-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Leader Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_Section"
                  id="floating_Section"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent max-[1024px]:border-white border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("section", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_Section"
                  className="peer-focus:font-medium absolute text-sm max-[1024px]:text-white text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Section
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_Arid"
                  id="floating_Arid"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 max-[1024px]:border-white border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("aridNumber", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_Arid"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Arid Number
                </label>
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex items-center max-[600px]:flex-col  gap-5 w-full">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_Email"
                  id="floating_Email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 max-[1024px]:border-white border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("email", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_Email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 max-[1024px]:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 max-[1024px]:border-white border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    handleFormValueChange("phoneNumber", e.target.value)
                  }
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 max-[1024px]:text-white transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent rounded-lg text-gray-400 border-2 max-[1024px]:text-white max-[1024px]:border-white border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer "
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="bg-black h-[8px] w-screen bottom-0 left-0 right-0 fixed z-[10000000]"></div>
    </>
  );
};

export default Page;
