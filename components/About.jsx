import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCode } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";

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
        <div className="w-full flex-1">About me</div>
      </div>
    </div>
  );
};

export default About;
