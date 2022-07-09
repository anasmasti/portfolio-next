import ContactSection from "../../components/contact/ContactSection";
import Head from "next/head";

export default function Contact() {
  return (
    <section>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Hey, I'm Anas Masti, I'm a Web developer"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Head>
      <ContactSection />
    </section>
  );
}
