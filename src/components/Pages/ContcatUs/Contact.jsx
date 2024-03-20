import React, { useState } from "react";
import image from "/Product/chocolate/image_1.jpg";
import toast from "react-hot-toast";
import { apiCall } from "../../../Api/Api";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.number.trim()) {
            errors.number = "Number is required";
        } else if (!/^\d+$/.test(formData.number)) {
            errors.number = "Please enter a valid number";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {

            const toastId = toast.loading("Sending Message...", { position: "top-right", });
            const apiUrl = "https://api.hdfonline.in/api/v1/sendMail";

            const postData = {
                mail_info: "value1",
                user: "chatapp585@gmail.com",
                password: "zsgklfeiarxcoyac",
                from: "Bhavishm009@gmail.com",
                to: "Bhavishm009@gmail.com",
                subject: "Hello ",
                description: "Something New",
                html: "<div>Hello</div>",
            };

            const headers = {
                "Content-Type": "application/json",
            };

            try {
                const responseData = await apiCall({
                    url: apiUrl,
                    method: "POST",
                    data: postData,
                    headers: headers,
                });
                if (responseData.status) {
                    toast.success("We Will Get Back To You Soon..", {
                        id: toastId,
                        position: "top-right",
                    });
                }
            } catch (error) {
                console.error("Error in posting data:", error);
                toast.error("Oop's Something Went Wrong..", {
                    id: toastId,
                    position: "top-right",
                });

            }
        };


    };



    return (
        <div >
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    minHeight: "60vh",
                }}
            >
                <div className="p-1 min-h-[60vh]  font-semibold text-5xl md:text-6xl flex justify-center items-center">
                    Contact Us
                </div>
            </div>
            <div>
                <section className="text-gray-700 py-20  body-font relative">
                    <div className="container flex shadow-grey shadow-xl p-5 md:p-8 justify-center items-center flex-col md:flex-row mx-auto">
                        <div className="">
                            <img src="/pngShreejiGraphics.png"  height={700} width={750} />
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap flex-col -m-2">
                                    <div className="p-2">
                                        <div className="relative">
                                            <label
                                                htmlFor="name"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full bg-gray-100 rounded border ${errors.name ? "border-red-500" : "border-gray-300"
                                                    } focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="relative">
                                            <label
                                                htmlFor="email"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full bg-gray-100 rounded border ${errors.email ? "border-red-500" : "border-gray-300"
                                                    } focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="relative">
                                            <label
                                                htmlFor="number"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Number
                                            </label>
                                            <input
                                                type="text"
                                                id="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                className={`w-full bg-gray-100 rounded border ${errors.number ? "border-red-500" : "border-gray-300"
                                                    } focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                            />
                                            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label
                                                htmlFor="message"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full bg-gray-100 rounded border ${errors.message ? "border-red-500" : "border-gray-300"
                                                    } focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                                            ></textarea>
                                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button onClick={handleSubmit} type="submit" className="flex mx-auto text-white bg-[#E8597E] border-0 py-2 px-8 focus:outline-none hover:bg-[#F2C031] rounded text-lg">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
