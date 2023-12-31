"use client"
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiCircleInfo } from "react-icons/ci";
import * as z from "zod";
import toast from "react-hot-toast";

interface FormValues {
  teamName: string;
  teamMembers: string[];
  teamMembersNumber: string;
  leaderName: string;
  projectTitle:string,
  projectDesc:string,
  section: string;
  aridNumber: string;
  email: string;
  phoneNumber: string;
}

const registrationSchema = z.object({
  teamName: z.string().min(1, "Team Name is required"),
  teamMembers: z.array(z.string()).min(1, "Team Members is required"),
  teamMembersNumber: z.string().min(1, "Team Members Number is required"),
  leaderName: z.string().min(1, "Leader Name is required"),
  projectTitle: z.string().min(1, "Project Title is required"),
  projectDesc: z.string().min(1, "Project Desc is required"),
  section: z.string().min(1, "Section is required"),
  aridNumber: z.string().min(1, "Arid Number is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
});

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

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const [processing, setProcessing] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<FormValues>({
    teamName: "",
    teamMembers: [],
    teamMembersNumber: "",
    leaderName: "",
    section: "",
    projectTitle,
    projectDesc,
    aridNumber: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const errors: { [key: string]: string } = { ...formErrors };

    if (name === "teamName" && !value.trim()) {
      errors.teamName = "require";
    } else if (name === "teamMembers" && !value.trim()) {
      errors.teamMembers = "require";
    } else if (name === "teamMembersNumber" && !value.trim()) {
      errors.teamMembersNumber = "require";
    } else if (name === "leaderName" && !value.trim()) {
      errors.leaderName = "require";
    } else if (name === "section" && !value.trim()) {
      errors.section = "require";
    } else if (name === "aridNumber" && !value.trim()) {
      errors.aridNumber = "require";
    } else if (name === "email" && !isValidEmail(value)) {
      errors.email = "require";
    } else if (name === "phoneNumber" && !value.trim()) {
      errors.phoneNumber = "require";
    } else {
      delete errors[name];
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleAddTag = (value: string) => {
    if (value.trim() !== "") {
      setTags((prevTags) => [...prevTags, value]);
      setInputValue("");
      setFormValues((prevValues) => ({
        ...prevValues,
        teamMembers: [...prevValues.teamMembers, value],
      }));
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);

    // Update teamMembers array in formValues
    setFormValues((prevValues) => ({
      ...prevValues,
      teamMembers: newTags,
    }));
  };

  const isValidEmail = (email: string): boolean => {
    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setProcessing(true);
      try {
        const parsedValues = await registrationSchema.parse(formValues);
        console.log("Parsed Values:", parsedValues);
        await sendData(parsedValues);
        setFormValues({
          teamName: "",
          teamMembers: [],
          teamMembersNumber: "",
          leaderName: "",
          section: "",
          aridNumber: "",
          email: "",
          phoneNumber: "",
        });
        setTags([]);
        toast.success("Registration Complete!");
      } catch (error) {
        toast.error("Error sending email!");
        if (error instanceof z.ZodError) {
          const fieldErrors: { [key: string]: string } = {};
          error.errors.forEach((err) => {
            const path = err.path.join(".");
            fieldErrors[path] = err.message;
          });
        }
      } finally {
        setProcessing(false);
      }
    }
  };

  const sendData = async (data: FormValues) => {
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      throw new Error("Error sending email");
    }
  };

  return (
    <>
      <div className="bg-black h-[8px] w-screen bottom-0 left-0 z-[5] right-0 fixed "></div>
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
            solely on the names of participants. Only the team leader&apos;s
            Arid-ID, contact information, and class/section is necessary.
          </div>
        </div>
        <form
          className=" max-[1024px]:absolute max-[1024px]:top-24   w-full  text-white p-6 "
          onSubmit={handleSubmit}
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
                  name="teamName"
                  id="teamName"
                  // Inside the input elements
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.teamName
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.teamName}
                  onChange={handleChange}
                />
                <label
                  htmlFor="teamName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.teamName ? (
                    <div className="flex  justify-between items-center gap-1">
                      Team Name{" "}
                      <div className="text-[12px] text-red-400">
                        ({formErrors.teamName})
                      </div>
                    </div>
                  ) : (
                    "Team Name"
                  )}
                </label>
              </div>
              <div className="relative z-0 w-2/6 max-[600px]:w-full mb-5 group">
                <input
                  type="text"
                  name="teamMembersNumber"
                  id="teamMembersNumber"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.teamMembersNumber
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.teamMembersNumber}
                  onChange={handleChange}
                />
                <label
                  htmlFor="teamMembersNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.teamMembersNumber ? (
                    <div className="flex  justify-between items-center gap-1">
                      Team Members{" "}
                      <div className="text-[12px] text-red-400">
                        ({formErrors.teamMembersNumber})
                      </div>
                    </div>
                  ) : (
                    "Team Members"
                  )}
                </label>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder=""
                  name="teamMembers"
                  id="teamMembers"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.teamMembers ? "border-red-500" : ""
                  } border-0 border-b-2 max-[1024px]:border-white border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer`}
                />
                <label
                  htmlFor="teamMembers"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 max-[1024px]:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {tags.length > 0
                    ? `Total Team Members ${tags.length}`
                    : "Team Members"}
                </label>

                <button
                  type="button"
                  onClick={() => {
                    handleAddTag(inputValue);
                    setInputValue(""); // Clear input value after adding tag
                  }}
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
                  name="leaderName"
                  id="leaderName"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.leaderName
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.leaderName}
                  onChange={handleChange}
                />
                <label
                  htmlFor="leaderName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.leaderName ? (
                    <div className="flex  justify-between items-center gap-1">
                      Leader Name
                      <div className="text-[12px] text-red-400">
                        ({formErrors.leaderName})
                      </div>
                    </div>
                  ) : (
                    "Leader Name"
                  )}
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="section"
                  id="section"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.section
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.section}
                  onChange={handleChange}
                />
                <label
                  htmlFor="section"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.section ? (
                    <div className="flex  justify-between items-center gap-1">
                      Section
                      <div className="text-[12px] text-red-400">
                        ({formErrors.section})
                      </div>
                    </div>
                  ) : (
                    "Section"
                  )}
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="aridNumber"
                  id="aridNumber"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.aridNumber
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.aridNumber}
                  onChange={handleChange}
                />
                <label
                  htmlFor="aridNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.aridNumber ? (
                    <div className="flex  justify-between items-center gap-1">
                      Arid Number
                      <div className="text-[12px] text-red-400">
                        ({formErrors.aridNumber})
                      </div>
                    </div>
                  ) : (
                    "Arid Number"
                  )}
                </label>
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex items-center max-[600px]:flex-col  gap-5 w-full">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.email
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.email ? (
                    <div className="flex  justify-between items-center gap-1">
                      Email
                      <div className="text-[12px] text-red-400">
                        ({formErrors.email})
                      </div>
                    </div>
                  ) : (
                    "Email"
                  )}
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent ${
                    formErrors.phoneNumber
                      ? "border-red-500"
                      : "border-gray-300 max-[1024px]:border-white "
                  } border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-white peer`}
                  placeholder=" "
                  required
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                />

                <label
                  htmlFor="phoneNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 max-[1024px]:text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100  w-full peer-placeholder-shown:translate-y-0 peer-focus:text-[12px] peer-focus:-translate-y-6"
                >
                  {formErrors.phoneNumber ? (
                    <div className="flex  justify-between items-center gap-1">
                      Phone Number{" "}
                      <div className="text-[12px] text-red-400">
                        ({formErrors.phoneNumber})
                      </div>
                    </div>
                  ) : (
                    "Phone Number"
                  )}
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={processing || !isFormValid}
              className={`w-full bg-black  border hover:border-white text-white px-4 py-2 rounded-md transition-colors`}
            >
              {processing ? (
                <div className="flex items-center justify-center group">
                  <div className="rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-100  animate-spin"></div>
                  <div className="ml-2">Processing...</div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-black h-[8px] w-screen bottom-0 left-0 z-[5] right-0 fixed "></div>
    </>
  );
};

export default Page;
