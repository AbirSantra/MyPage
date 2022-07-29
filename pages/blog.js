import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";
import BlogCard from "../components/BlogCard";

const blog = ({ posts }) => {
  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16 px-4 md:px-8 lg:px-16">
        <Head>
          <title>Abir Santra | Blog</title>
          <meta name="description" content="Abir Santra's portfolio" />
          <link rel="icon" href="/abir dp.png" />
        </Head>

        {/* Header Div */}
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="font-Titillium  text-dark-black dark:text-white-two">
            Blog
          </h1>
          <p className="text-main-dark text-xl font-medium text-center">
            I also like to write about the stuff I learn
          </p>
        </div>

        {/* Tech Div */}
        <div className="w-full grid justify-center items-center gap-4 grid-cols-1">
          {posts.map((card) => {
            return <BlogCard key={card._id} post={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "AbirSantra") {
          publication {
            posts {
              _id
              slug
              title
              brief
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.user.publication.posts,
    },
  };
}

export default blog;
