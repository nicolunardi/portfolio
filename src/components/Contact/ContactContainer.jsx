import React from "react";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <section
      name="contact"
      className="min-h-screen  items-center border-b border-slate-400 max-w-[500px] m-auto"
    >
      <h1 className="text-center sm:text-left text-4xl py-10 underline decoration-orange-400 underline-offset-8">
        Contact
      </h1>
      <div className="rounded shadow-lg bg-slate-50 p-10">
        <p className="text-center text-lg mb-3">Lets get in touch :)</p>
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default ContactContainer;
