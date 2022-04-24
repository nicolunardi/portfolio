import React from "react";
import SocialItemSmall from "./SocialItemSmall";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";
import resume from "../../assets/other/resume.pdf";

const SocialsSmall = () => {
  return (
    <div className="flex sm:hidden gap-5 mt-16 w-full">
      <SocialItemSmall
        icon={<FaLinkedin size={32} />}
        background="bg-blue-600"
        textColor="text-white"
        text="Linkedin"
        link="https://www.linkedin.com/in/nicolas-lunardi-707409120"
      ></SocialItemSmall>
      <SocialItemSmall
        icon={<FaGithub size={32} />}
        background="bg-gray-700"
        textColor="text-white"
        text="Github"
        link="https://github.com/nicolunardi"
      ></SocialItemSmall>
      <SocialItemSmall
        icon={<AiOutlineMail size={32} />}
        background="bg-red-600"
        textColor="text-white"
        text="Email"
        link="mailto:nlunardi7@gmail.com"
      ></SocialItemSmall>
      <SocialItemSmall
        icon={<AiOutlineFilePdf size={32} />}
        background="bg-orange-900"
        textColor="text-white"
        text="Resume"
        link={resume}
      ></SocialItemSmall>
    </div>
  );
};

export default SocialsSmall;
