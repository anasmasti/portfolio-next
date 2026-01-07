import type { Metadata } from "next";
import SkillsSection from "../../components/skills/SkillsSection";

export const metadata: Metadata = {
  title: "My Skills",
};

export default function SkillsPage() {
  return (
    <section>
      <SkillsSection />
    </section>
  );
}
