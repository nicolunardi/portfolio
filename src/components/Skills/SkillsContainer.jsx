import React from "react";
import { skills } from "../../data/information";
import SkillIcon from "./SkillIcon";

const SkillsContainer = () => {
  return (
    <section
      name="skills"
      className="min-h-screen  items-center border-b border-slate-400 max-w-7xl m-auto pb-16"
    >
      <h1 className="text-center sm:text-left text-4xl py-10 underline decoration-orange-400 underline-offset-8">
        Skills
      </h1>
      <div className="sm:w-full rounded shadow-lg flex flex-wrap bg-slate-50 px-10 py-16 justify-center">
        {skills.map((skill, idx) => (
          <SkillIcon key={idx} skill={skill}></SkillIcon>
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;
