import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCard from "./BlogCard";

const BlogSection = ({ posts }) => {
  // console.log(posts);
  return (
    <div className="w-full  flex justify-center items-center py-28">
      {/* Container Div */}
      <div className="w-full max-w-[1440px] flex flex-col gap-10 justify-center items-start px-4 md:px-8 lg:px-16">
        {/* Title Div */}
        <div className="flex justify-center items-start flex-col gap-4">
          <h1 className="font-Titillium  text-dark-black dark:text-white-two">
            Latest Blogs
          </h1>
          <p className="text-light-grey text-base font-medium">
            I also like to write about the things I learn
          </p>
        </div>

        {/* Blogs Div */}
        <div className="flex flex-col justify-center items-center gap-4">
          {posts.map((post) => {
            return <BlogCard key={post._id} post={post} />;
          })}
        </div>

        {/* Button to all blogs */}
        <button className="btn self-end">
          See all Blogs <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
