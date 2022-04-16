import React, { useState } from "react";
import NavBarLinks from "./NavBarLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import { sections } from "../../data/information";

const NavBar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebar = () => setSidebarIsOpen((c) => !c);

  return (
    <header className="fixed w-full h-[80px] flex justify-between items-center px-8 sm:px-16 top-0 left-0 bg-white ">
      <div className="flex items-center gap-2 group">
        {/* icon goes here for name */}
        <div className="w-4 h-4 bg-red-500 group-hover:bg-blue-500 group-hover:rotate-45"></div>
        <h1 className="text-2xl hover:text-orange-400">Nico Lunardi</h1>
      </div>
      {/* desktop menu bar */}
      <div className="hidden sm:block">
        <ul className="flex gap-5 items-center">
          {sections.map((section, idx) => (
            <NavBarLinks
              key={idx}
              section={section.section}
              text={section.text}
            ></NavBarLinks>
          ))}
        </ul>
      </div>
      {/* hamburger icon */}
      <button className="sm:hidden z-10" onClick={toggleSidebar}>
        {sidebarIsOpen ? <FaTimes color="orange" size={30}/> : <FaBars size={30}/>}
      </button>
      {/* mobile menu bar */}
      <div
        className={`${
          sidebarIsOpen
            ? "absolute top-0 left-0 w-full h-screen bg-black text-orange-300"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 items-center h-screen justify-center">
          {sections.map((section, idx) => (
            <NavBarLinks
              key={idx}
              section={section.section}
              text={section.text}
              toggleSidebar={toggleSidebar}
            ></NavBarLinks>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
