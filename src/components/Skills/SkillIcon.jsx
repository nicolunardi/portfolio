import React from "react";

const SkillIcon = ({ skill }) => {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-md bg-slate-50 m-2">
      <img
        src={skill.icon}
        alt={skill.alt}
        className="w-14 h-14 md:w-20 md:h-20"
      />
      <p className="text-center text-sm md:text-xl">{skill.text}</p>
    </div>
  );
};

export default SkillIcon;
