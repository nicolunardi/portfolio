import React from "react";

const SocialItemSmall = ({ icon, background, textColor, text, link }) => {
  return (
    <div className="w-12 h-12 group">
      <a
        href={link}
        target="_blank "
        rel="noreferrer noopener"
        className={`${background} ${textColor} block items-center justify-between p-2 cursor-pointer rounded-lg group-hover:scale-110 group-hover:shadow-lg  group-hover:shadow-slate-400 group-hover:animate-bounce`}
      >
        {icon}
      </a>
    </div>
  );
};

export default SocialItemSmall;
