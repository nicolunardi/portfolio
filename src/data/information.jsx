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
import codeImage from "../assets/images/codeImage.jpg";
import discussImage from "../assets/images/discuss.png";
import travelaImage from "../assets/images/travela.png";

export const home = {
  title: "Hi, I'm Nico!",
  subTitle:
    "I am a software engineer and medical scientist. Currently seeking my first developer role whilst continuing to learn and grow.",
};

export const about = {
  title: "About Me",
  text: [
    "I am a software engineer currently working as a medical scientist. Currently, I am completing a master of information technology at the University of New South Wales.",
    "Throughout my many studies and career, the one constant has always been my strong desire to always be learning to better myself. This has allowed me to grow and become a well rounded individual. This desire has been the reason that I began coding as a hobby, which has developed into a career aspiration. I am ready to step into a new stage and begin my career in the tech field.",
    "As well as pushing to learn new things, I take pride in sharing my knowledge with others. In all my recent roles, I have been in charge of training new recruits into fully fledged contributing team members.",
    "I look forward to working as part of an inclusive team, with values that align with my own.",
  ],
};

export const work = [
  {
    image: discussImage,
    title: "Discuss",
    info: [
      "Slack like app built with a vanilla javacript frontend, bootstrap for styling, and backend of node.js and express.js.",
      "It has most of the functionality of slack, including but not limited to signing up and login, joining and creating private or public channels, inviting members to channels, pinning, reacting to, editing, and deleting messages, as well as sending image messages",
      "The motivation behind building the project was to understand how javascript really works before moving on to learning a framework.",
    ],
    tags: ["Vanilla JS", "Bootstrap", "Express.js"],
    code: "https://github.com/nicolunardi/Discuss-client",
    live: "https://discussapp.netlify.app/",
  },
  {
    image: travelaImage,
    title: "Travela",
    info: [
      "AirBnB like app built with React and Material UI for the frontend, and a backend of FastApi, a python framework.",
      "The app allows users to create and manage listings as well as the bookings for each listing. Users can also search for available listings and filter or sort them.",
      "I was motivated to build this project in order to solidify my understanding of React, as well as to try a different backend framework to Express.js. I chose FastApi as I required a fast, lightweight solution, as well as for a way to build on my python experience.",
    ],
    tags: ["React", "Mui v5", "Python", "FastApi"],
    code: "https://github.com/nicolunardi/travela-client",
    live: "https://travela-app.netlify.app/",
  },
  {
    image: codeImage,
    title: "Graph Visualizer",
    info: [
      "Graph Visualizer is a library written entirely in C that allows for the creating of graphs using adjacency lists. Once the graphs are created, you can add/remove/edit vertices (weighted or not) as well as edges. The adjacency list representation of the graph can then be printed out to a specified file.",
      "The library also has functions to perform a simple Pagerank algorithm on the graph as well as calculate and display the shortest path using Dijkstra's algorithm",
    ],
    tags: ["C"],
    code: "https://github.com/nicolunardi/graph-visualizer",
    live: "",
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
