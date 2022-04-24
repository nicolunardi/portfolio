import React from "react";

const SkillIcon = ({ skill }) => {
  return (
    <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-md bg-slate-50 m-2">
      <img
        src={skill.icon}
        alt={skill.alt}
        className="w-10 h-10 md:w-20 md:h-20"
      />
      <p className="text-center text-[0.5rem] sm:text-sm md:text-xl">
        {skill.text}
      </p>
    </div>
  );
};

export default SkillIcon;
