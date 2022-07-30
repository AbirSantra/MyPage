import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-8">
      <a
        href="https://github.com/AbirSantra"
        target="_blank"
        rel="noreferrer"
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <FaGithub></FaGithub>
      </a>
      <a
        href="https://www.linkedin.com/in/abir-santra-8a9305205/"
        target="_blank"
        rel="noreferrer"
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <FaLinkedinIn></FaLinkedinIn>
      </a>
      <a
        href="https://twitter.com/DezignDeck"
        target="_blank"
        rel="noreferrer"
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <FaTwitter></FaTwitter>
      </a>
      <a
        href="mailto:santraabir8@gmail.com?subject=Write%20your%20main%20purpose%20of%20contacting%20me%20here&body=Write%20your%20message%20in%20detail.%0D%0ADon't%20forget%20to%20mention%20your%20contact%20detail%20so%20I%20can%20get%20back%20to%20you"
        className="text-2xl md:text-2xl text-light-grey hover:text-white-two dark:hover:text-dark-black ease-in-out duration-300   rounded-full p-2 bg-white-two dark:bg-dark-black hover:bg-main-dark dark:hover:bg-main-dark"
      >
        <HiMailOpen></HiMailOpen>
      </a>
    </div>
  );
};

export default Socials;
