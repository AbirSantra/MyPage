import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 mt-12">
      <a
        href=""
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <FaGithub></FaGithub>
      </a>
      <a
        href=""
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <FaLinkedinIn></FaLinkedinIn>
      </a>
      <a
        href=""
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <FaTwitter></FaTwitter>
      </a>
      <a
        href=""
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <HiMailOpen></HiMailOpen>
      </a>
    </div>
  );
};

export default Socials;
