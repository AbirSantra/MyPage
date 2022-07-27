import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PolaroidImg from "../img/Polaroid.jpg";
import CoinCoinImg from "../img/CoinCoin.jpg";
import WeatherNow from "../img/WeatherNow.jpg";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-28">
      {/* Container Div */}
      <div className="w-full max-w-[1440px] flex flex-col gap-16 justify-center items-start p-4 md:p-8 lg:p-16">
        {/* Title Div */}
        <div className="flex justify-center items-start flex-col gap-4">
          <h1 className="font-Titillium  text-dark-black dark:text-white-two">
            Featured Projects
          </h1>
          <p className="text-light-grey text-base font-medium">
            Here are some of the projects that I am most proud of
          </p>
        </div>

        {/* Projects Div */}
        <div className="project-container w-full grid justify-center items-center md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4">
          <div className="project-1 md:row-span-2 md:col-span-2 rounded-2xl overflow-hidden flex justify-center items-center h-fit">
            <Image src={PolaroidImg} />
          </div>
          <div className="project-2 md:col-span-1 rounded-2xl overflow-hidden flex justify-center items-center h-fit">
            <Image src={CoinCoinImg} />
          </div>
          <div className="project-3 md:col-span-1 rounded-2xl overflow-hidden flex justify-center items-center h-fit">
            <Image src={WeatherNow} />
          </div>
        </div>

        {/* Button to all projects */}
        <button className="btn self-end">
          See all projects <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
