import { useCallback, useEffect, useRef, useState } from "react";
import AboutParagraph from "./AboutParagraph";
import aboutStyle from "../../styles/about.module.scss";
import AboutMeLinks from "./AboutMeLinks";
import MainTitle from "../shared/MainTitle";

export default function AboutMeSection() {
  const [scrollY, setScrollY] = useState(0);
  const handelScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  const refContainer = useRef();
  let paragraphs = [
    {
      id: 1,
      body: "My name is Anas MASTI, i'm a Full-Stack Web Developer and Designer, passionate about creating websites with ergonomic and responsive qualities that can be adapted to any device.",
    },
    {
      id: 2,
      body: "I like to share my skills and knowledge with people who have the same passion.",
    },
    {
      id: 3,
      body: "I'm so interested in the IT development sector, and very attracted to new technology.",
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
    <section id="About">
      <div className="bg-black text-white p-24 mt-10">
      <MainTitle title='About Me' />
        <div
          ref={refContainer}
          className={`${aboutStyle.about_us_text} mt-6 lg:w-2/4`}
        >
          <AboutParagraph content={paragraphs} progress={progress} />
        </div>
      </div>

      <AboutMeLinks />
    </section>
  );
}
