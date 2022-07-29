import Head from "next/head";
import React from "react";
import { techStack } from "../data/stack";
import StackCard from "../components/StackCard";

const tech = () => {
  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16 px-4 md:px-8 lg:px-16">
        <Head>
          <title>Abir Santra | Tech Stack</title>
          <meta name="description" content="Abir Santra's portfolio" />
          <link rel="icon" href="/abir dp.png" />
        </Head>

        {/* Header Div */}
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="font-Titillium  text-dark-black dark:text-white-two">
            Tech Stack
          </h1>
          <p className="text-main-dark text-xl font-medium text-center">
            These are my everyday go-to tools and technologies that I use
          </p>
        </div>

        {/* Tech Div */}
        <div className="w-full grid justify-center items-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((card) => {
            return (
              <StackCard icon={card.icon} name={card.name} desc={card.desc} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default tech;
