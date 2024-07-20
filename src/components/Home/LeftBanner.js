import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaFacebook,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function LeftBanner() {
  return (
    <>
      <div className="w-full md:w-1/2 flex flex-col gap-10 p-4 md:p-0">
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-normal">WELCOME TO IMRAN'S WORLD</h4>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            I AM <span className="text-blue-400">IMRAN ALI</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            I'm{" "}
            <span style={{ fontWeight: "bolder", color: "White" }}>
              <Typewriter
                words={[
                  "Full stack web designer",
                  "a Programmer",
                  "Data Analyst",
                  "Graphic Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                cursorBlinking="_"
                deleteSpeed={300}
                typeSpeed={120}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
        <div className="text-sm md:text-base font-bodyFont leading-6 tracking-wide py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde in
          est excepturi, natus provident quisquam ut dolores possimus tempore,
          id similique dolore quod ea, officia itaque odio cupiditate fugit?
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-3">
              <span className="bannerIcon">
                <FaGithub />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
              <span className="bannerIcon">
                <FaFacebook />
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Skills on
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <FaJava />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
