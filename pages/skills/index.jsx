import SkillsSection from "../../components/skills/SkillsSection";
import Head from "next/head";

export default function Skills() {
  return (
    <section>
      <Head>
        <title>Skills</title>
        <meta
          name="description"
          content="Hey, I'm Anas Masti, I'm a Web developer"
        />
      </Head>
      <SkillsSection />
    </section>
  );
}
