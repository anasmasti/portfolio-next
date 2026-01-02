"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AboutParagraph from "./AboutParagraph";
import aboutStyle from "../../styles/About.module.scss";
import AboutMeLinks from "./AboutMeLinks";
import MainTitle from "../shared/MainTitle";
import SocialMedia from "../shared/SocialMedia";

const paragraphs = [
  {
    id: 1,
    body: "Hi, I'm Anas, a JavaScript expert from Morocco. I build fast, clean, and responsive web experiences (and yes, I test on my phone too).",
  },
  {
    id: 2,
    body: "I enjoy sharing what I learn and helping others grow in web development. Knowledge hoarding is bad for karma.",
  },
  {
    id: 3,
    body: "I stay sharp with modern web tech and love learning new tools without breaking production. Mostly.",
  },
  {
    id: 4,
    body: "When I'm not coding, I relax by playing games and pretending it's for UX research.",
  },
];
const numberOfPages = 4;

export default function AboutMeSection() {
  const [scrollY, setScrollY] = useState(0);
  const handelScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  const refContainer = useRef();
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
