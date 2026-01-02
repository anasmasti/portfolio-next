import AboutMeSection from "../components/about/AboutMeSection";
import LandingSection from "../components/landing/LandingSection";

export const metadata = {
  title: "Anas Masti",
};

export default function HomePage() {
  return (
    <main>
      <LandingSection />
      <AboutMeSection />
    </main>
  );
}
