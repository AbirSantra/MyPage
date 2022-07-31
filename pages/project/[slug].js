import React from "react";
import { client, urlFor } from "../../lib/client";
import PortableText from "react-portable-text";
import Head from "next/head";
import groq from "groq";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  // console.log(project);
  const {
    content,
    coverImage,
    demolink,
    githublink,
    subtitle,
    techStack,
    title,
  } = project;

  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16 px-4 md:px-8 lg:px-16">
        <Head>
          <title>Abir Santra | Project</title>
          <meta name="description" content="Abir Santra's portfolio" />
          <link rel="icon" href="/abir dp.png" />
        </Head>

        {/* Project */}
        <div className="w-full flex flex-col justify-center items-start gap-8">
          {/* Header */}
          <div className="w-full flex flex-col justify-center items-start gap-4">
            <h1 className="text-dark-black dark:text-white-one">{title}</h1>
            <p className=" text-dark-black dark:text-white-one">{subtitle}</p>
            <img
              src={urlFor(coverImage).url()}
              alt={title}
              className="w-full rounded-2xl my-4"
            />
          </div>

          {/* Link Buttons */}
          <div className="flex justify-center items-center gap-4">
            <a
              href={demolink}
              className="btn rounded-lg px-4 py-2"
              target="_blank"
              rel="noreferrer"
            >
              <p>Demo</p>
              <BiLinkExternal />
            </a>
            <a
              href={githublink}
              className="btn rounded-lg px-4 py-2"
              target="_blank"
              rel="noreferrer"
            >
              <p>Code</p>
              <FaGithub />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="w-full flex justify-start items-center flex-wrap gap-2">
            <p className=" text-dark-black dark:text-white-one font-medium text-lg">
              Tech Used:
            </p>
            {techStack.map((tech) => {
              return (
                <div
                  key={tech._id}
                  className="text-main-dark border-[1px] text-sm p-1 rounded-md font-medium"
                >
                  {tech.title}
                </div>
              );
            })}
          </div>

          {/* Content */}
          <PortableText
            projectId="kmgaqrem"
            dataset="production"
            // Pass in block content straight from Sanity.io
            content={project.content}
            // Optionally override marks, decorators, blocks, etc. in a flat
            // structure without doing any gymnastics
            serializers={{
              h1: (props) => <h1 style={{ color: "red" }} {...props} />,
              li: ({ children }) => (
                <li className="special-list-item">{children}</li>
              ),
            }}
            className="text-dark-black dark:text-white-one"
          />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = groq`*[ _type == "project" && slug.current == "${pageSlug}" ]{
    title,
    subtitle,
    coverImage,
    demolink,
    githublink,
    content,
    "techStack": techStack[]->{_id,title}
  }`;
  const project = await client.fetch(query);

  if (!project) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        project: project[0],
      },
    };
  }
};

export default Project;
