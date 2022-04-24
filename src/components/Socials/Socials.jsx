import React from "react";
import SocialItem from "./SocialItem";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";
import resume from "../../assets/other/resume.pdf";

const Socials = () => {
  return (
    <div className="hidden sm:fixed sm:flex flex-col top-0 left-0 justify-center h-screen">
      <SocialItem
        icon={<FaLinkedin size={32} />}
        background="bg-blue-600"
        textColor="text-white"
        text="Linkedin"
        link="https://www.linkedin.com/in/nicolas-lunardi-707409120"
      ></SocialItem>
      <SocialItem
        icon={<FaGithub size={32} />}
        background="bg-gray-700"
        textColor="text-white"
        text="Github"
        link="https://github.com/nicolunardi"
      ></SocialItem>
      <SocialItem
        icon={<AiOutlineMail size={32} />}
        background="bg-red-600"
        textColor="text-white"
        text="Email"
        link="mailto:nlunardi7@gmail.com"
      ></SocialItem>
      <SocialItem
        icon={<AiOutlineFilePdf size={32} />}
        background="bg-orange-900"
        textColor="text-white"
        text="Resume"
        link={resume}
      ></SocialItem>
    </div>
  );
};

export default Socials;
