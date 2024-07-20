import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function card({ title, des, icon }) {
  return (
    <>
      <div className="w-full px-12 py-5 h-80 rounded-lg shadow-shadowOne group items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
        <div className="h-72 overflow-y-hidden">
          <div className="flex h-full flex-col gap-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <div>
              <span className=" text-5xl text-blue-400">{icon}</span>
            </div>
            <div className=" flex-col space-y-4">
              <h2 className=" text-2xl font-titleFont font-bold text-gray-300">
                {title}
              </h2>
              <p>{des}</p>
              <span className="text-2xl text-designColor">
                <HiArrowCircleRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
