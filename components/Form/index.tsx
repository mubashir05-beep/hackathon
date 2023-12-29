"use client";

import React from "react";
import { FC, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
export type FormData = {
    name: string;
    email: string;
    message: string;
};
const Form: FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
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
        } else if (name === "email" && !value.trim()) {
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
                setFormData({ name: "", email: "", message: "" });
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

       <div className="flex items-center max-[550px]:flex-col w-full gap-4">
            <div className="mb-4 w-full ">
                <div className="flex item-center justify-between">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                    >
                        Name
                    </label>
                    {formErrors.name && (
                        <span className="text-red-500 text-xs">{formErrors.name}</span>
                    )}
                </div>
                <input
                    type="text"
                    required
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${formErrors.name ? "border-red-500 border-[1px]" : "border-black dark:border-white"} bg-white dark:bg-black focus:outline-none`}

                />
            </div>
          
            <div className="mb-4 w-full ">
                <div className="flex item-center justify-between">
                    <label
                        htmlFor="email"
                        className="block  text-sm font-medium mb-2"
                    >
                        Email
                    </label>
                    {formErrors.email && (
                        <span className="text-red-500 text-xs">{formErrors.email}</span>
                    )}
                </div>
                <input
                    type="email"
                    required
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${formErrors.email ? "border-red-500 border-[1px]" : "border-black dark:border-white"} bg-white dark:bg-black focus:outline-none`}

                />
            </div>
            </div>
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
                    className={`w-full px-4 py-2 rounded-md border ${formErrors.message ? "border-red-500 border-[1px]" : "border-black dark:border-white"} bg-white dark:bg-black focus:outline-none`}

                />
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