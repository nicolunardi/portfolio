import React from "react";
import { home as homeContent } from "../../data/information";

const HomeContainer = () => {
  return (
    <section
      name="home"
      className="min-h-screen flex flex-col sm:flex-row items-center sm:gap-32 justify-center border-b border-slate-400 max-w-7xl m-auto"
    >
      {/* logo next to short info on home page */}
      <div className="bg-red-500 h-40 w-40 place-self-start sm:place-self-center"></div>
      <div className="w-full">
        <h1 className="text-5xl text-orange-400 font-bold py-6">
          {homeContent.title}
        </h1>
        <h2 className="text-4xl">{homeContent.subTitle}</h2>
      </div>
    </section>
  );
};

export default HomeContainer;
