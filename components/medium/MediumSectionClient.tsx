"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MediumSection = dynamic(
  () => import("./MediumSection"),
  { ssr: false }
);

export default function MediumSectionClient() {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerRef.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={triggerRef}>
      {isVisible ? <MediumSection /> : null}
    </div>
  );
}
