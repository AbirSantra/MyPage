import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [darkmode, setDarkmode] = useState("light");

  const handleTheme = () => {
    if (darkmode == "light") {
      document.documentElement.classList.add("dark");
      setDarkmode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkmode("light");
    }
  };

  return (
    <div className="navbar fixed w-full h-24 z-[100] flex justify-center items-center dark:bg-dark-black">
      <div className="navbar__container flex justify-between items-center w-full h-full max-w-[1440px] px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/">
          <h1 className="navbar__logo font-Titillium text-[1.8rem] font-semibold leading-none dark:text-white-one">
            Abir<span className=" font-thin cursor-pointer ">Santra</span>
            <span className="text-main-dark font-bold">.</span>
          </h1>
        </Link>

        <div className="navbar__right flex justify-center items-center gap-4">
          {/* Navlinks */}
          <div className="navbar__navlinks justify-center items-center flex gap-6 dark:text-white-two">
            <Link href="/">
              <a className="navbar__navlink hidden md:flex justify-center items-center transition-all duration-300 ease-in-out  hover:text-main-dark">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="navbar__navlink hidden md:flex justify-center items-center transition-all duration-300 ease-in-out hover:text-main-dark">
                About
              </a>
            </Link>
            <Link href="/">
              <a className="navbar__navlink hidden md:flex justify-center items-center transition-all duration-300 ease-in-out hover:text-main-dark ">
                Tech
              </a>
            </Link>
            <Link href="/">
              <a className="navbar__navlink hidden md:flex justify-center items-center transition-all duration-300 ease-in-out hover:text-main-dark ">
                Projects
              </a>
            </Link>
            <Link href="/">
              <a className="navbar__navlink hidden md:flex justify-center items-center transition-all duration-300 ease-in-out hover:text-main-dark ">
                Blog
              </a>
            </Link>
            <Link href="/">
              <a className="navbar__navlink btn hidden md:flex">Say Hi!</a>
            </Link>
          </div>

          {/* Theme toggler */}
          <button
            onClick={handleTheme}
            className="transition-all duration-300 ease-in-out"
          >
            {darkmode === "light" ? (
              <MdOutlineDarkMode
                size={24}
                className="text-dark-black hover:text-main-dark transition-all duration-300 ease-in-out hover:animate-spin"
                title="Lights Off!"
              />
            ) : (
              <MdOutlineLightMode
                size={24}
                className="text-white-one hover:text-main-dark transition-all duration-300 ease-in-out hover:animate-spin"
                title="Lights On!"
              />
            )}
          </button>

          {/* Mobile Menu */}
          <div className="navbar__mobile md:hidden">
            <AiOutlineMenu size={24} className="dark:text-white-two" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
