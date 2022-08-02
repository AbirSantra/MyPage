import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCode, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { FiPenTool, FiDownload, FiExternalLink } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  // Outer Div
  return (
    <div
      className="w-full min-h-[100vh] flex justify-center items-center py-[7rem]"
      id="about"
    >
      {/* Container Div */}
      <div className="w-full max-w-[1440px] flex flex-col-reverse md:flex-row justify-center items-center flex-wrap-reverse p-4 md:p-8 lg:p-16 gap-32 md:gap-16 ">
        {/* Left Section - Services */}
        <div className="w-full flex-1 flex flex-col justify-center items-start gap-4">
          <h1 className="md:hidden font-Titillium text-dark-black dark:text-white-two">
            Skills
          </h1>
          <p className="md:hidden text-light-grey text-sm font-medium sm:text-base">
            These are the things that I'm good at
          </p>
          <ServiceCard
            name="Web Development"
            desc="This includes frontend of any type of website as well as backend work such as creating and working with API, databases and authentication."
            icon={<FaCode />}
          />
          <ServiceCard
            name="Graphics Design"
            desc="This includes all types of graphic design work such as logos, banners, posters, channel arts, etc"
            icon={<FiPenTool />}
          />
          <ServiceCard
            name="UI Design"
            desc="This includes designing responsive UI, wireframes and mockups for web applications as well as mobile apps."
            icon={<MdOutlineDesignServices />}
          />
        </div>
        {/* Right Section - About */}
        <div className="w-full flex-1 flex flex-col justify-center items-start gap-8">
          <h1 className="font-Titillium text-dark-black dark:text-white-two">
            About Me
          </h1>
          <p className="text-light-grey text-sm font-medium sm:text-base">
            I enjoy creating things that make a difference
          </p>
          <p className="text-light-grey text-sm font-medium sm:text-base">
            I started coding in high school and currently am a second-year
            undergraduate studying Information Technology at MCKV Institute of
            Engineering, looking for opportunities. <br /> <br />
            I&apos;m pretty positive and strong-willed and I always finish what
            I start. My dream is to be happy in life, doing what I love and
            being surrounded by my loved ones. When I&apos;m not coding, I love
            to hang out with my friends and play video games, listen to music,
            jam on my drums, and watch Anime.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm sm:text-base">
            <a href="/about" className="btn" aria-label="Learn more about me">
              Learn More
              <BsArrowRight />
            </a>
            {/* <a
              href="/Abir Santra CV(Unfinished).pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-2"
              aria-label="Download my resume"
            >
              Resume
              <FiDownload />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
