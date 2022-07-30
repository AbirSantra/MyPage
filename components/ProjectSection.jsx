import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PolaroidImg from "../img/Polaroid.jpg";
import CoinCoinImg from "../img/CoinCoin.jpg";
import WeatherNow from "../img/WeatherNow.jpg";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-28">
      {/* Container Div */}
      <div className="w-full max-w-[1440px] flex flex-col gap-10 justify-center items-start px-4 md:px-8 lg:px-16">
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
          {/* Project 1 */}
          <div className="group relative project-1 md:row-span-2 md:col-span-2 rounded-2xl overflow-hidden flex justify-center items-center h-fit shadow-lg">
            <Image
              src={PolaroidImg}
              className="group-hover:scale-110 ease-in-out duration-300"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 bg-light-black/60 backdrop-blur-sm h-full w-full flex justify-center items-center rounded-2xl ease-in-out duration-300">
              <Link href="project/polaroid">
                <button className="btn text-3xl h-20 w-20 shadow-md">
                  <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative project-2 md:col-span-1 rounded-2xl overflow-hidden flex justify-center items-center h-fit shadow-lg">
            <Image
              src={CoinCoinImg}
              className="group-hover:scale-110 ease-in-out duration-300"
            />
            <div className="absolute opacity-0 hover:opacity-100 top-0 left-0 bg-light-black/60 backdrop-blur-sm h-full w-full flex justify-center items-center rounded-2xl ease-in-out duration-300">
              <Link href="project/project-1">
                <button className="btn text-3xl h-20 w-20 shadow-md">
                  <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative project-3 md:col-span-1 rounded-2xl overflow-hidden flex justify-center items-center h-fit shadow-lg">
            <Image
              src={WeatherNow}
              className="group-hover:scale-110 ease-in-out duration-300"
            />
            <div className="absolute opacity-0 hover:opacity-100 top-0 left-0 bg-light-black/60 backdrop-blur-sm h-full w-full flex justify-center items-center rounded-2xl ease-in-out duration-300">
              <Link href="project/weathernow">
                <button className="btn text-3xl h-20 w-20 shadow-md">
                  <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Button to all projects */}
        <Link href="/project">
          <button className="btn self-end">
            See all projects <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
