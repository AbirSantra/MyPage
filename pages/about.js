import Head from "next/head";
import Image from "next/image";
import React from "react";
import AdamasLogo from "../img/adamas logo.jpg";
import MckvLogo from "../img/MCKVIE-logo.png";
import CrypticLogo from "../img/cryptic logo.jpg";

const about = () => {
  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16 px-4 md:px-8 lg:px-16">
        <Head>
          <title>Abir Santra | About</title>
          <meta name="description" content="Abir Santra's portfolio" />
          <link rel="icon" href="/abir dp.png" />
        </Head>

        {/* Header Div */}
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="font-Titillium  text-dark-black dark:text-white-two">
            About me
          </h1>
          <p className="text-main-dark text-xl font-medium text-center">
            I enjoy creating things that make a difference
          </p>
        </div>

        {/* Education */}
        <div className="w-full flex flex-col justify-center items-start gap-6">
          <h2 className="font-Titillium text-[1.8rem] sm:text-[2rem] text-dark-black dark:text-white-one">
            Education
          </h2>
          {/* Adamas */}
          <div className="flex justify-start items-start flex-col sm:flex-row gap-4">
            <Image
              src={AdamasLogo}
              height={64}
              width={64}
              className="rounded-full"
            />
            <div className="text-dark-black dark:text-white-one">
              <p className="font-semibold text-lg">
                Adamas International School
              </p>
              <p className="font-light">
                10th Standard & 12th Standard with specialzation in Computer
                Science
              </p>
              <p className="text-light-grey">2005 - 2020</p>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col sm:flex-row gap-4">
            <Image
              src={MckvLogo}
              height={64}
              width={64}
              className="rounded-full"
            />
            <div className="text-dark-black dark:text-white-one">
              <p className="font-semibold text-lg">
                MCKV Institute of Engineering
              </p>
              <p className="font-light">
                Bachelor's Degree in Information Technology
              </p>
              <p className="text-light-grey">2020 - 2024</p>
            </div>
          </div>
        </div>

        <div className="line w-full max-w-[1440px] h-[1px] bg-light-grey/40"></div>

        {/* Experience */}
        <div className="w-full flex flex-col justify-center items-start gap-6">
          <h2 className="font-Titillium text-[1.8rem] sm:text-[2rem] text-dark-black dark:text-white-one">
            Experience
          </h2>
          {/* Adamas */}
          <div className="flex justify-start items-start flex-col sm:flex-row gap-4">
            <Image
              src={CrypticLogo}
              height={64}
              width={64}
              className="rounded-full"
            />
            <div className="text-dark-black dark:text-white-one flex flex-col gap-1">
              <p className="font-semibold text-xl">Cryptic Records</p>
              <p className="font-medium">Graphics Designer - Project Based</p>
              <div className="font-medium text-sm">
                Responsibilities:
                <li className="">
                  Designed the official logo using Adobe Illustrator
                </li>
                <li className="">
                  Designed the official Channel Art using Adobe Photoshop
                </li>
                <li className="">
                  Created the visualizer for the first few videos in Premiere
                  Pro and After Effects
                </li>
              </div>
              <p className="text-light-grey">May 2019 - Dec 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
