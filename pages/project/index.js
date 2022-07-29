import Head from "next/head";
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { client } from "../../lib/client";

const project = ({ project }) => {
  // console.log(project);
  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16 px-4 md:px-8 lg:px-16">
        <Head>
          <title>Abir Santra | Projects</title>
          <meta name="description" content="Abir Santra's portfolio" />
          <link rel="icon" href="/abir dp.png" />
        </Head>

        {/* Header Div */}
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="font-Titillium  text-dark-black dark:text-white-two">
            Projects
          </h1>
          <p className="text-main-dark text-xl font-medium text-center">
            I'm pretty proud of these
          </p>
        </div>

        {/* Projects */}
        <div className="w-full grid justify-center items-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((card) => {
            return <ProjectCard key={card._id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const query = `*[ _type == "project" ]`;
  const project = await client.fetch(query);

  if (!project) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        project,
      },
    };
  }
};

export default project;
