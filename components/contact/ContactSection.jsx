import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">

        <MainTitle title='Contact' />
        <ContactForm />
    </div>
  )
}
