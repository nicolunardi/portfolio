import React from "react";
import { work } from "../../data/information";
import Card from "./Card";

const WorksContainer = () => {
  return (
    <section
      name="works"
      className="min-h-screen  items-center border-b border-slate-400 max-w-7xl m-auto"
    >
      <h1 className="text-center sm:text-left text-4xl py-10 underline decoration-orange-400 underline-offset-8">
        Works
      </h1>
      {work.map((project, idx) => (
        <Card key={idx} project={project} />
      ))}
    </section>
  );
};

export default WorksContainer;
