import type { Metadata } from "next";
import ContactSection from "../../components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return (
    <section>
      <ContactSection />
    </section>
  );
}
