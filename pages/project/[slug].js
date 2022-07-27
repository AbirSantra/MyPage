import React from "react";
import { client, urlFor } from "../../lib/client";
import BlockContent from "@sanity/block-content-to-react";
import PortableText from "react-portable-text";

// const PostComponents = {
//   types: {
//     image: ({ value }) => {
//       return <img src={urlFor(value)} alt="bodyimage" />;
//     },
//   },
// };

const Project = ({ project }) => {
  // console.log(props);
  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      <img src={urlFor(project.coverImage)} alt="project" />
      <a href={project.githublink}>Github Link</a>
      <a href={project.demolink}>Demo Link</a>
      {/* <PortableText value={project.content} components={PostComponents} /> */}
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
      />
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

  const query = `*[ _type == "project" && slug.current == "${pageSlug}" ]`;
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
