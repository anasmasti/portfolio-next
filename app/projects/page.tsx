import type { Metadata } from "next";
import ProjectsSection from "../../components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Some Projects",
};

export default function ProjectsPage() {
  return (
    <section>
      <ProjectsSection />
    </section>
  );
}
