import codeImage from "../assets/images/codeImage.jpg";
import fastapiIcon from "../assets/icons/fastapiIcon.svg";
import cssIcon from "../assets/icons/cssIcon.svg";
import expressIcon from "../assets/icons/expressIcon.svg";
import htmlIcon from "../assets/icons/htmlIcon.svg";
import mongoIcon from "../assets/icons/mongoIcon.png";
import javascriptIcon from "../assets/icons/javascriptIcon.svg";
import nodeIcon from "../assets/icons/nodeIcon.svg";
import postgresqlIcon from "../assets/icons/postgresqlIcon.svg";
import pythonIcon from "../assets/icons/pythonIcon.png";
import reactIcon from "../assets/icons/reactIcon.svg";
import bootstrapIcon from "../assets/icons/bootstrapIcon.png";
import muiIcon from "../assets/icons/muiIcon.png";
import tailwindIcon from "../assets/icons/tailwindIcon.png";

export const home = {
  title: "Hi, I'm Nico!",
  subTitle: "A software engineer and medical scientists",
};

export const about = {
  title: "About Me",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem mollitia exercitationem sed natus magnam id dolores quod earum, dicta excepturi aspernatur at tempore delectus et! Voluptatum commodi voluptates, doloribus placeat similique, magnam voluptatem voluptate rerum laudantium accusamus in laboriosam minima?",
};

export const work = [
  {
    image: codeImage,
    title: "Project 1",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis nam ullam in temporibus rem et mollitia, esse enim asperiores rerum fuga vel fugit quos?",
    tags: ["Vanilla JS", "Bootstrap", "Express.js"],
  },
  {
    image: codeImage,
    title: "Project 2",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis nam ullam in temporibus rem et mollitia, esse enim asperiores rerum fuga vel fugit quos?",
    tags: ["React", "Mui v5", "Python", "FastApi"],
  },
];

export const skills = [
  {
    icon: htmlIcon,
    text: "HTML",
    alt: "html",
  },
  {
    icon: cssIcon,
    text: "CSS",
    alt: "css",
  },
  {
    icon: javascriptIcon,
    text: "Javascript",
    alt: "javascript",
  },
  {
    icon: reactIcon,
    text: "React",
    alt: "react",
  },
  {
    icon: expressIcon,
    text: "Express",
    alt: "express",
  },
  {
    icon: nodeIcon,
    text: "Node",
    alt: "node",
  },
  {
    icon: pythonIcon,
    text: "Python 3",
    alt: "python 3",
  },
  {
    icon: fastapiIcon,
    text: "FastApi",
    alt: "fast api",
  },
  {
    icon: mongoIcon,
    text: "mongoDb",
    alt: "mongo db",
  },
  {
    icon: postgresqlIcon,
    text: "PostgreSQL",
    alt: "postgresql",
  },
  {
    icon: bootstrapIcon,
    text: "Bootstrap",
    alt: "bootstrap",
  },
  {
    icon: muiIcon,
    text: "MUI v5",
    alt: "material UI",
  },
  {
    icon: tailwindIcon,
    text: "Tailwind",
    alt: "tailwind",
  },
];

export const sections = [
  {
    section: "home",
    text: "Home",
  },
  {
    section: "about",
    text: "About",
  },
  {
    section: "skills",
    text: "Skills",
  },
  {
    section: "works",
    text: "Works",
  },
  {
    section: "contact",
    text: "Contact",
  },
];
