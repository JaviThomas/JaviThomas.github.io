import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-gray-800 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Javier Thomas
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300 flex flex-wrap items-center text-base justify-center">
          <a href="#work" className="mr-5 hover:text-gray-800">
            Work History
          </a>
          <a href="#projects" className="mr-5 hover:text-gray-800">
            Side Projects
          </a>
          <a href="#contact" className="mr-5 hover:text-gray-800">
            Tutoring
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
