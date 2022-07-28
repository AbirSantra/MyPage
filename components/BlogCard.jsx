import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="group w-full h-fit flex justify-center items-start bg-grey dark:bg-light-black rounded-lg p-6 sm:px-8 gap-8 border-[1px] border-grey dark:border-light-black hover:border-[1px] hover:border-main-dark dark:hover:border-main-dark ease-in-out duration-300 cursor-pointer hover:scale-[1.01] shadow-md">
      {/* Text */}
      <div className="w-full flex justify-center items-start flex-col gap-4">
        <h1 className="text-[1rem] sm:text-[1.2rem] font-semibold tracking-wide font-Titillium text-main-dark  ease-in-out duration-300 leading-6">
          {post.title}
        </h1>
        <p className="text-[0.8rem] sm:text-[0.9rem] text-dark-black dark:text-light-grey">
          {post.brief}
        </p>
        <Link href={`https://abirsantra.hashnode.dev/${post.slug}`}>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-[0.9rem] text-main-dark font-medium"
          >
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
