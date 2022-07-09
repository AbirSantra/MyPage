import React from "react";
import Image from "next/image";
import Avatar from "../public/abir dp.png";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-10rem)] md:h-[calc(100vh-6rem)] w-full flex justify-center items-center">
      <div className="w-full max-w-[1440px] h-full p-4 md:p-8 lg:p-16 flex flex-col justify-center items-center gap-4 text-center text-dark-black dark:text-white-two">
        <p className="text-main-dark font-semibold text-xl uppercase">
          Hi, I'm Abir
        </p>
        <h1 className="font-Titillium text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Full Stack Developer & Graphics Designer
        </h1>
        <p className="text-md md:text-2xl mt-4">
          Just a guy who loves building things out of code.
        </p>
        <div
          className="bg-main-dark rounded-full w-[200px] h-[200px] flex justify-center items-center animate-floating-div transition-all ease-in duration-200 mt-8"
          title="Yeah, that's my face😐"
        >
          <Image
            src={Avatar}
            alt="Abir Avatar"
            width={190}
            height={190}
            className="relative z-10"
          />
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Hero;
