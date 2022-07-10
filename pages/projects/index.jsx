import ProjectsSection from "../../components/projects/ProjectsSection";
import Head from "next/head";

export default function Projects() {
  return (
    <section>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Hey, I'm Anas Masti, I'm a Web developer"
        />
      </Head>
      <ProjectsSection />
    </section>
  );
}
