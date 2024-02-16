import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Home.css";

function Navbar({ nav, setNav }) {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "services",
    },
    {
      id: 4,
      link: "gallery",
    },
    {
      id: 5,
      link: "reviews",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20
    text-white bg-black px-4 sticky top-0"
    >
      <div>
        <h1 className="text-3xl ml-2 font-signature animate-charcter">
          Dr. Sabari Dey
        </h1>
        <h1 className="text-[12px] ml-2">MBBS, DGO, DNB, FMAS, FCG</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full
            h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
