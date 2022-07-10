import { useCallback, useEffect, useRef, useState } from "react";
import AboutParagraph from "./AboutParagraph";
import aboutStyle from "../../styles/about.module.scss";
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
      body: "I'm a Full-Stack Web Developer based in Morocco, passionate about creating responsive websites with ergonomic qualities that can be adapted to any device.",
    },
    {
      id: 2,
      body: "I like to share my skills and knowledge with people who have the same passion.",
    },
    {
      id: 3,
      body: "I'm so interested in the IT development sector, and very attracted to new technologies.",
    },
  ];
  let numberOfPages = 3;
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
