import Head from "next/head";
import Script from "next/script";
import AboutMeSection from "../components/about/AboutMeSection";
import LandingSection from "../components/landing/LandingSection";

export default function Home() {
  return (
    <main>
      <Head>
      <title>Anas Masti</title>
      </Head>
      <LandingSection />
      <AboutMeSection />
    </main>
  );
}
