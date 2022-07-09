import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import Menu from "./../Menu/Menu";
import LandingTitle from "./LandingTitle";

export default function LandingSection() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const landingRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: landingRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 1.4,
          color: 0x603cfd,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={landingRef} className="absolute z-0 w-full h-full"></div>
      <div className="h-screen bg-transparent flex justify-center items-center p-5 flex-col  relative">
        <LandingTitle />
        <div className="mt-4">
          <Menu />
        </div>
      </div>
    </>
  );
}
