import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="w-full  flex justify-center items-center pb-8">
      {/* Container Div */}
      <div className="w-full max-w-[1440px] flex flex-col gap-6 justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="line w-full h-[1px] bg-light-grey/40"></div>
        <Link href="/">
          <h1 className="navbar__logo font-Titillium text-[1.8rem] font-semibold leading-none dark:text-white-one">
            Abir<span className=" font-thin cursor-pointer ">Santra</span>
            <span className="text-main-dark font-bold">.</span>
          </h1>
        </Link>
        <Socials />
        <p className="text-light-grey text-sm font-normal">
          Handcrafted by Abir Santra &copy; {new Date().getFullYear()}
        </p>
        <p className="text-light-grey text-sm font-normal">
          Made using NextJS | TailwindCSS | Sanity CMS
        </p>
      </div>
    </div>
  );
};

export default Footer;
