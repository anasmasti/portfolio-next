"use client";

import { useRef } from "react";
import Menu from "../Menu/Menu";
import LandingTitle from "./LandingTitle";
import useVantaEffect, { type LoadEffect } from "../../hooks/useVantaEffect";
import { globeVantaOptions } from "../../config/vanta.config";
import PagesLayout from "../layouts/PagesLayout";

const loadGlobeEffect: LoadEffect = () => import("vanta/dist/vanta.globe.min");

export default function LandingSection() {
  const landingRef = useRef(null);
  useVantaEffect(loadGlobeEffect, landingRef, globeVantaOptions);

  return (
    <PagesLayout leftSlot={null} topBarMode="absolute">
      <div ref={landingRef} className="absolute z-0 w-full h-full"></div>
      <div className="h-screen bg-transparent flex justify-center items-center p-5 flex-col relative">
        <LandingTitle />
        <div className="mt-4">
          <Menu />
        </div>
      </div>
    </PagesLayout>
  );
}
