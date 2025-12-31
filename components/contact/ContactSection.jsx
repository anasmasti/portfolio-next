import React, { useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import PagesLayout from "../layouts/PagesLayout";
import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import useVantaEffect from "../../hooks/useVantaEffect";

const vantaOptions = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x603cfd,
  color2: 0x603cfd,
  backgroundColor: 0x0,
  size: 3.4,
  spacing: 20.0,
};

export default function ContactSection() {
  const contactRef = useRef(null);
  useVantaEffect(DOTS, contactRef, vantaOptions);

  return (
    <PagesLayout>
      <div ref={contactRef} className="w-full h-full z-0 absolute"></div>
      <div className="bg-black text-white p-10 lg:p-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-1/2 md:w-full">
          <MainTitle title="Contact" />
        </div>
        <ContactLinks />
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </PagesLayout>
  );
}
