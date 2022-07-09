import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [darkmode, setDarkmode] = useState("light");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

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
    <div className="navbar w-full h-20 sm:h-24 z-[100] flex justify-center items-center bg-white-one/70 dark:bg-dark-black/70 backdrop-blur-sm">
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
          <button onClick={handleTheme}>
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

          {/* Mobile Menu Icon */}
          <div className="navbar__mobile--icon md:hidden">
            <AiOutlineMenu
              onClick={handleNav}
              size={24}
              className="dark:text-white-two cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden navbar__mobile--background fixed top-0 left-0 z-[100] w-full h-screen bg-dark-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "navbar__mobile--menu fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-white-two dark:bg-light-black p-10 ease-in duration-[0.4s] flex flex-col justify-start gap-16"
              : "navbar__mobile--menu fixed left-[-100%] top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-white-two dark:bg-light-black p-10 ease-in duration-[0.4s] flex flex-col justify-start gap-16"
          }
        >
          {/* Top Section */}
          <div className="mobilemenu__top flex justify-between items-center w-full">
            {/* Logo */}
            <Link href="/">
              <h1 className="navbar__logo font-Titillium text-[1.4rem] font-semibold leading-none dark:text-white-one">
                Abir<span className=" font-thin cursor-pointer ">Santra</span>
                <span className="text-main-dark font-bold">.</span>
              </h1>
            </Link>
            <AiOutlineClose
              onClick={handleNav}
              size={28}
              className="text-dark-black dark:text-main-dark cursor-pointer border-light-grey "
            />
          </div>

          {/* Navlinks */}
          <div className="mobilemenu__navlinks flex flex-col justify-center items-start gap-12">
            <Link href="/">
              <a className="font-medium text-xl text-light-black dark:text-grey hover:text-main-dark transition-all duration-300 ease-in-out">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="font-medium text-xl text-light-black dark:text-grey hover:text-main-dark transition-all duration-300 ease-in-out">
                About
              </a>
            </Link>
            <Link href="/">
              <a className="font-medium text-xl text-light-black dark:text-grey hover:text-main-dark transition-all duration-300 ease-in-out">
                Tech
              </a>
            </Link>
            <Link href="/">
              <a className="font-medium text-xl text-light-black dark:text-grey hover:text-main-dark transition-all duration-300 ease-in-out">
                Projects
              </a>
            </Link>
            <Link href="/">
              <a className="font-medium text-xl text-light-black dark:text-grey hover:text-main-dark transition-all duration-300 ease-in-out">
                Blog
              </a>
            </Link>
          </div>
          {/* Theme toggler */}
          <button onClick={handleTheme}>
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
          {/* CTA Button */}
          <Link href="/">
            <a className="btn bg-main-dark text-white-two border-0 w-full max-w-xs font-medium text-xl">
              Say Hi!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
