import React, { useState } from "react";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="h-20 w-full top-0 sticky z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-8">
        <div className="text-3xl font-bold hover:text-blue-400 hover:pointer">
          <a href="/">Imran Ali</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul className="hidden md:flex md:items-center gap-10">
          {navLinksdata
            .filter((navLink) => navLink.title !== "Contact")
            .map((navLink) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide hover:text-blue-500 duration-500 cursor-pointer"
                key={navLink._id}
              >
                <Link
                  activeClass="active"
                  to={navLink.title}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
        </ul>
        <div className="hidden md:block">
          {navLinksdata
            .filter((navLink) => navLink.title === "Contact")
            .map((navLink) => (
              <Link
                key={navLink._id}
                activeClass="active"
                to="Footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-4 py-2 text-white bg-gradient-to-r from-blue-800 to-black rounded-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-950 hover:transition-colors duration-500 cursor-pointer"
              >
                {navLink.title}
              </Link>
            ))}
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-bodyColor z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col items-start gap-4 p-4">
          {navLinksdata
            .filter((navLink) => navLink.title !== "Contact")
            .map((navLink) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide hover:text-blue-500 duration-500 cursor-pointer"
                key={navLink._id}
              >
                <Link
                  activeClass="active"
                  to={navLink.title}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          <li>
            {navLinksdata
              .filter((navLink) => navLink.title === "Contact")
              .map((navLink) => (
                <Link
                  key={navLink._id}
                  activeClass="active"
                  to="Footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-4 py-2 text-white bg-gradient-to-r from-blue-800 to-black rounded-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-950 hover:transition-colors duration-500 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {navLink.title}
                </Link>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
