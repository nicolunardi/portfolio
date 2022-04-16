import React from "react";
import { Link } from "react-scroll/modules";

const NavBarLinks = ({ section, text, toggleSidebar }) => {
  return (
    <li className="text-xl hover:text-orange-300 cursor-pointer">
      <Link
        to={section}
        smooth
        duration={500}
        offset={-80}
        onClick={toggleSidebar}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarLinks;
