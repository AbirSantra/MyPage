import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { urlFor } from "../lib/client";
import logo from "../img/canva.png";

const ProjectCard = ({ card }) => {
  return (
    <div className="relative project-1 rounded-2xl overflow-hidden flex justify-center items-center h-fit shadow-lg hover:scale-105 ease-in-out duration-300">
      <img src={urlFor(card.coverImage)} />
      <div className="absolute opacity-0 hover:opacity-100 top-0 left-0 bg-light-black/60 backdrop-blur-sm h-full w-full flex justify-center items-center rounded-2xl ease-in-out duration-300">
        <Link href={`project/${card.slug.current}`}>
          <button className="btn text-3xl h-20 w-20 shadow-md">
            <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
