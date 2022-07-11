import Head from "next/head";
import AboutMeSection from "../components/about/AboutMeSection";
import LandingSection from "../components/landing/LandingSection";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Anas Masti</title>
        <meta
          name="description"
          content="Hey, I'm Anas Masti, I'm a Web developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" defer></script>
      </Head>
      <LandingSection />
      <AboutMeSection />
    </main>
  );
}
