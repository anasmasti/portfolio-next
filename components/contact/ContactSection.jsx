import PagesLayout from "../layouts/PagesLayout";
import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  return (
    <PagesLayout>
      <div className="bg-black text-white p-10 lg:p-10  md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
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
