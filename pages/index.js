import Head from "next/head";
import About from "../components/About";
import BlogSection from "../components/BlogSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect } from "react";

export default function Home({ posts }) {
  useEffect(() => {
    // if theme exists in local storage
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }

      // if NOT set via local storage previously
    } else {
      localStorage.setItem("color-theme", "dark");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Abir Santra | FullStack Web Developer | Graphics Designer</title>
        <meta name="description" content="Abir Santra's portfolio" />
        <link rel="icon" href="/abir dp.png" />
      </Head>

      <Hero />
      <About />
      <ProjectSection />
      <BlogSection posts={posts} />
    </div>
  );
}

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
            posts(page: 0) {
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
