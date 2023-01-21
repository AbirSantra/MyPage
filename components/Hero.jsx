import React from "react";
import Image from "next/image";
import Avatar from "../public/abir dp new.png";
import Socials from "./Socials";
import { BiChevronsDown } from "react-icons/bi";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="relative h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] w-full flex justify-center items-center bg-white-two dark:bg-dark-black">
			<div className="w-full max-w-[1440px] h-full p-4 md:p-8 lg:p-16 flex flex-col justify-center items-center gap-4 text-center text-dark-black dark:text-white-two">
				<p className="text-main-dark font-semibold text-xl uppercase">
					Hi, I&apos;m Abir
				</p>
				<h1 className="font-Titillium text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
					Web Developer & Graphics Designer
				</h1>
				<p className="text-md md:text-2xl mt-4 text-light-grey">
					I love building things out of code.
				</p>
				<div
					className="bg-main-dark rounded-full w-[170px] h-[170px] flex justify-center items-center animate-floating-div transition-all ease-in duration-200 mt-8"
					title="Yeah, that's my face😐"
				>
					<Image
						src={Avatar}
						alt="Abir Avatar"
						width={160}
						height={160}
						priority
					/>
				</div>
				<div className="mt-8">
					<Socials />
				</div>
				<a
					href="#about"
					className="absolute bottom-8 sm:bottom-8 cursor-pointer text-light-grey animate-floating-div"
				>
					<BiChevronsDown size={24} />
				</a>
			</div>
		</div>
	);
};

export default Hero;
