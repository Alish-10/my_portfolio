// pages/contact.js
"use client";
import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("Your message is submitted successfully");
    // You can handle form submission here, such as sending data to your backend.
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contacts">
      <div className="sm: pt-12"></div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className=" flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0  bg-teal-600 dark:bg-black w-full max-w-5xl p-8 sm: p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-3 text-teal-200 dark:text-white text-sm">
                {" "}
                'Im thrilled to connect with you! Whether you have a question, a
                collaboration proposal, or simply want to say hello, I'd love to
                hear from you. Feel free to use the contact form below to get in
                touch, and I'll do my best to respond as soon as possible.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <AiOutlinePhone
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
                <span>+ 977 9862755888</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <AiOutlineMail
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
                <span>alishdahal77@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ImLocation2
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
                <span>Dhulabari, Jhapa, Nepal</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alish-10"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
              </a>
              <a
                href="https://twitter.com/hqasmei"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineTwitter
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/alishdahal/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alishdahal/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100 dark:text-teal-300"
                  size={30}
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-40 h-40 bg-teal-700 dark:bg-teal-500 rounded-full -right-28 -top-28"></div>
            <div className="absolute w-40 h-40 bg-teal-700 dark:bg-teal-500 rounded-full -left-28 -bottom-16"></div>

            <div className=" relative z-0 bg-white dark:bg-black rounded-xl shadow-lg p-8 text-grey-600 md:w-80 ">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 "
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-teal-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onInput={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600 mt-2 text-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-teal-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onInput={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600 mt-2 text-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-teal-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onInput={handleChange}
                    placeholder="Message"
                    required
                    className="w-full border rounded-md px-3 py-2 h-32 outline-none focus:ring-2 focus:ring-teal-500 mt-2 text-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-400"
                >
                  Send Message
                </button>
                {message != "" ? <div> {message}</div> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
