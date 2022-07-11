import ProjectsSection from "../../components/projects/ProjectsSection";
import Head from "next/head";

export default function Projects() {
  return (
    <section>
      <Head>
        <title>Some Projects</title>
        <meta
          name="description"
          content="Hey, I'm Anas Masti, I'm a Web developer based in Morocco"
        />
        <meta
          name="keywords"
          content="Anas, Masti, Anas Masti, anasmasti,Développeur web, Développeur Angular, Développeur VueJs, Angular, React, NextJs, VueJs, Javascript, Java, Php, Laravel, Maroc, Maroc, Morocco, Développeur, Developer Web Full-Stack"
        ></meta>
        <meta name="author" content="Anas Masti" />
        <meta
          name="google-site-verification"
          content="e7uObb_R2u4MF6JYc14AYBpZSN8ArazQ_YD0iNnm_UY"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <ProjectsSection />
    </section>
  );
}
