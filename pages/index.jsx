import Head from "next/head";
import AboutMeSection from "../components/about/AboutMeSection";
import MainTitle from "../components/landing/MainTitle";
import VideoBackground from "../components/landing/VideoBackground";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <div>
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
        <MainTitle />
        <div className="mt-4">
          <Menu />
        </div>
      </div>

      <AboutMeSection />

      <div className="p-20">
        <a href="#" className="p-5 bg-purple-500">See My Skills</a>
      </div>
    </div>
  );
}
