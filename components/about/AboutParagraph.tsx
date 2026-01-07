"use client";

import aboutStyle from "../../styles/About.module.scss";

type Paragraph = {
  id: number;
  body: string;
};

type AboutParagraphProps = {
  content: Paragraph[];
  progress: number;
};

const blockOpacity = (sectionProgress: number, blockNo: number): number => {
  let progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

export default function AboutParagraph({
  content,
  progress,
}: AboutParagraphProps) {
  return (
    <>
      {content.map((paragraph, index) => (
        <p
          key={paragraph.id}
          className={`${aboutStyle.about_us_text} text-2xl font-semibold`}
          style={{ opacity: blockOpacity(progress, index) }}
        >
          {paragraph.body}
          <br /> <br />
        </p>
      ))}
    </>
  );
}
