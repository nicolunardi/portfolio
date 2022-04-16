import React from "react";
import { about as aboutContent } from "../../data/information";

const AboutContainer = () => {
  return (
    <section
      name="about"
      className="min-h-screen flex items-center border-b border-slate-400 max-w-7xl m-auto"
    >
      <div>
        <h1 className="text-center sm:text-left text-4xl py-10 underline decoration-orange-400 underline-offset-8">
          {aboutContent.title}
        </h1>
        <p className="leading-10">{aboutContent.text}</p>
      </div>
    </section>
  );
};

export default AboutContainer;
