import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

export default function ProjectCard({ title, des, source }) {
  return (
    <div className="w-full flex flex-col px-12 py-5 h-auto rounded-lg  shadow-shadowOne group items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className=" w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className=" w-full h-60 object-cover group-hover:scale-110 duration-300"
          src={source}
          alt="img"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-2">
        <div className="flex gap-1 justify-between">
          <div>
            <h3 className=" font-bold text-lg">{title}</h3>
          </div>
          <div className="flex gap-2 items-center ">
            <FaGithub className=" bg-black w-8 h-8 rounded-full text-lg hover:text-designColor cursor-pointer" />
            <IoIosGlobe className="  bg-black w-8 h-8 rounded-full text-lg hover:text-designColor cursor-pointer" />
          </div>
        </div>
        <div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}
