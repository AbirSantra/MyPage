import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar fixed w-full h-24 z-[100] flex justify-center items-center">
      <div className="navbar__container flex justify-between items-center w-full h-full max-w-[1440px] px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <h1 className="navbar__logo font-Titillium text-2xl">
          Abir<span className="font-normal ">Santra</span>
          <span className="font-normal text-green-dark">.</span>
        </h1>
        {/* Navlinks */}
        <div className="navbar__navlinks flex justify-center items-center gap-8">
          <Link href="/">
            <a className="navbar__navlink flex justify-center items-center transition-all duration-300 ease-in hover:text-green-dark">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="navbar__navlink flex justify-center items-center transition-all duration-300 ease-in hover:text-green-dark">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="navbar__navlink flex justify-center items-center transition-all duration-300 ease-in hover:text-green-dark">
              Tech
            </a>
          </Link>
          <Link href="/">
            <a className="navbar__navlink flex justify-center items-center transition-all duration-300 ease-in hover:text-green-dark">
              Projects
            </a>
          </Link>
          <Link href="/">
            <a className="navbar__navlink btn">Connect with me</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
