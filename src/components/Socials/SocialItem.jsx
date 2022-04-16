import React from "react";

const SocialItem = ({ icon, background, textColor, text, link }) => {
  return (
    <a
      href={link}
      target="_blank "
      rel="noreferrer noopener"
      className={`flex ${background} ${textColor} w-32 h-12 items-center justify-between px-2 ml-[-82px] hover:ml-0 duration-500 cursor-pointer`}
    >
      <p>{text}</p>
      {icon}
    </a>
  );
};

export default SocialItem;
