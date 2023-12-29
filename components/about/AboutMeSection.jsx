import { useCallback, useEffect, useRef, useState } from "react";
import AboutParagraph from "./AboutParagraph";
import aboutStyle from "../../styles/About.module.scss";
import AboutMeLinks from "./AboutMeLinks";
import MainTitle from "../shared/MainTitle";
import SocialMedia from "../shared/SocialMedia";

export default function AboutMeSection() {
  const [scrollY, setScrollY] = useState(0);
  const handelScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  const refContainer = useRef();
  let paragraphs = [
    {
      id: 1,
      body: "Greetings from the coding cosmos! I'm Anas,  a JavaScript virtuoso based in the heart of Morocco. By day, I'm weaving magic into the digital fabric, conjuring interactive and responsive web experiences. JavaScript isn't just a language for me, it's the wand that brings pixels to life.",
    },
    {
      id: 2,
      body: "Sharing my skills and knowledge is not just a pastime, it's a commitment to fostering a community of like-minded individuals who share the same fervor for web development.",
    },
    {
      id: 3,
      body: "My enthusiasm for the IT development sector knows no bounds, and I am irresistibly drawn to the ever-evolving landscape of new technologies.",
    },
    {
      id: 4,
      body: "When the sun dips below the horizon, I morph into a nocturnal gamer. Armed with a keyboard and a passion for pixels, I venture into virtual realms, mastering challenges and embracing the adrenaline of the game. It's not just about pixels, it's about the pixelated adventures that unfold under the glow of my screens",
    },
  ];
  let numberOfPages = 4;
  let progress = 0;
  let { current: containerElement } = refContainer;

  if (containerElement) {
    let { clientHeight, offsetTop } = containerElement;
    let screenHeight = window.innerHeight;
    let halfScreenHeight = screenHeight / 2;
    let persentY =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight
      ) / clientHeight;
    progress = Math.min(
      numberOfPages - 0.5,
      Math.max(0.5, persentY * numberOfPages)
    );
  }

  useEffect(() => {
    document.addEventListener("scroll", handelScroll);
    return () => document.removeEventListener("scroll", handelScroll);
  }, [handelScroll]);

  return (
    <section id="about">
      <div className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-1/2 md:w-full">
          <MainTitle title="About Me" />
          <SocialMedia />
        </div>
        <div
          ref={refContainer}
          className={`${aboutStyle.about_us_text} mt-12 lg:w-1/2`}
        >
          <AboutParagraph content={paragraphs} progress={progress} />
        </div>
      </div>
      <AboutMeLinks />
    </section>
  );
}
