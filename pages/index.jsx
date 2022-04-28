import Head from "next/head";
import AboutMeSection from "../components/about/AboutMeSection";
import LandingTitle from "../components/landing/LandingTitle";
import VideoBackground from "../components/landing/VideoBackground";
import Menu from "../components/Menu/Menu";

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
      </Head>

      <VideoBackground />
      <div className="w-screen h-screen flex justify-center items-center p-5 flex-col z-10">
        <LandingTitle />
        <div className="mt-4">
          <Menu />
        </div>
      </div>
      <AboutMeSection />
    </main>
  );
}
