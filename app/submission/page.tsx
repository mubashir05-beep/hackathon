"use client";

import React from "react";
import { FC, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
export type FormData = {
    name: string;
    email: string;
    message: string;
    floating_Email:string;
};
const Form: FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
        floating_Email:""
    });

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [processing, setProcessing] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Form validation logic for the current field
        const errors: { [key: string]: string } = { ...formErrors };

        if (name === "name" && !value.trim()) {
            errors.name = "required";
        } else if (name === "floating_Email" && !value.trim()) {
          errors.floating_Email = "required";
      }
         else if (name === "email" && !value.trim()) {
            errors.email = "required";
        } else if (name === "email" && !isValidEmail(value)) {
            errors.email = "Invalid email format";
        } else if (name === "message" && !value.trim()) {
            errors.message = "required";
        } else {
            delete errors[name]; // Remove the error for the current field if it's valid
        }

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const isValidEmail = (email: string): boolean => {
        // Email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            setProcessing(true);
            try {
                await sendEmail(formData);
                setFormData({ name: "", email: "", message: "", floating_Email:""});
                toast.success(
                    "Email sent successfully! Thank you for reaching out. We'll get back to you as soon as possible!"
                );
            } catch (error) {
                toast.error("Error sending email!");
                console.error("Error sending email:", error);
            } finally {
                setProcessing(false);
            }
        }
    };

    const sendEmail = async (data: FormData) => {
        try {
            const response = await fetch("/api/send", {
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
        <form
            className="dark:text-white text-black justify-between w-full  rounded-lg "
            onSubmit={formSubmit}
        >

    
            {/* Message textarea field */}
            <div className="mb-4">
                <div className="flex item-center justify-between">
                    <label
                        htmlFor="message"
                        className="block  text-sm font-medium mb-2"
                    >
                        Message
                    </label>
                    {formErrors.message && (
                        <span className="text-red-500 text-xs">{formErrors.message}</span>
                    )}
                </div>
                <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${formErrors.message ? "border-red-500 border-[1px]" : "border-black dark:border-white"}  dark:bg-black focus:outline-none`}

                />
            </div>
{/* New Field */}
            <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_Email"
                  id="floating_Email"
                  className={`w-full px-4 py-2 rounded-md border ${formErrors.floating_Email ? "border-red-500 border-[1px]" : "border-blue-600"} dark:bg-black focus:outline-none`}
                  placeholder=" "
                  required
                  value={formData.floating_Email}
                
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_Email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 max-[1024px]:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-white peer-focus:dark:border-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                
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
        </form>
    );
};

export default Form;