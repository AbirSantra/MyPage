import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCode, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { FiPenTool, FiDownload, FiExternalLink } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";

const About = () => {
  // Outer Div
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center py-[7rem]"
      id="about"
    >
      {/* Container Div */}
      <div className="w-full max-w-[1440px] flex flex-col-reverse md:flex-row justify-center items-center flex-wrap-reverse p-4 md:p-8 lg:p-16 gap-16 ">
        {/* Left Section - Services */}
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
          <ServiceCard
            name="Web Development"
            desc="This is just a sample description. This paragraph will briefly describe the service in about 1-2 lines."
            icon={<FaCode />}
          />
          <ServiceCard
            name="Graphics Design"
            desc="This is just a sample description. This paragraph will briefly describe the service in about 1-2 lines."
            icon={<FiPenTool />}
          />
          <ServiceCard
            name="UI Design"
            desc="This is just a sample description. This paragraph will briefly describe the service in about 1-2 lines."
            icon={<MdOutlineDesignServices />}
          />
        </div>
        {/* Right Section - About */}
        <div className="w-full flex-1 flex flex-col justify-center items-start gap-6">
          <h1 className="font-Titillium text-dark-black dark:text-white-two">
            About Me
          </h1>
          <h2 className="font-Titillium font-medium text-xl italic text-light-black dark:text-white-two">
            I enjoy creating things that make a difference.
          </h2>
          <p className="text-light-grey text-sm font-medium sm:text-base">
            I started coding in high school and currently am a second-year
            undergraduate studying Information Technology at MCKV Institute of
            Engineering, looking for opportunities. <br /> <br />
            I'm pretty positive and strong-willed and I always finish what I
            start. My dream is to be happy in life, doing what I love and being
            surrounded by my loved ones. When I'm not coding, I love to hang out
            with my friends and play video games, listen to music, jam on my
            drums, and watch Anime.
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className=" text-dark-black dark:text-white-two text-lg font-medium font-Titillium">
              Resume:{" "}
            </p>
            <a href="/Abir Santra CV(Unfinished).pdf" download>
              <FiDownload
                size={24}
                className="text-dark-black dark:text-white-two hover:text-main-dark duration-300 ease-in-out dark:hover:text-main-dark"
              />
            </a>
            <a
              href="/Abir Santra CV(Unfinished).pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink
                size={24}
                className="text-dark-black dark:text-white-two hover:text-main-dark duration-300 ease-in-out dark:hover:text-main-dark"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
