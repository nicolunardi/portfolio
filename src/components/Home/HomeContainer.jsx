import React from "react";
import { home as homeContent } from "../../data/information";
import SocialsSmall from "../Socials/SocialsSmall";
import DNA from "../svg/DNA";

const HomeContainer = () => {
  return (
    <section
      name="home"
      className="min-h-screen flex flex-col sm:flex-row items-center sm:gap-32 justify-center border-b border-slate-400 max-w-7xl m-auto z-0"
    >
      {/* logo next to short info on home page */}
      <div className=" h-40 w-40 place-self-start sm:place-self-center rotate-d z-10">
        <DNA></DNA>
      </div>
      <div className="w-full">
        <h1 className="text-5xl text-orange-400 font-bold py-6 fadein-first">
          {homeContent.title}
        </h1>
        <h2 className="text-lg fadein-second">{homeContent.subTitle}</h2>
      </div>
      <SocialsSmall></SocialsSmall>
    </section>
  );
};

export default HomeContainer;
