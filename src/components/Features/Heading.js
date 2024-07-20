import React from "react";

function Heading() {
  return (
    <div className=" flex flex-col gap-6 font-titleFont">
      <h3 className=" text-sm uppercase font-light text-blue-400 tracking-wide">
        Features
      </h3>
      <h1 className=" text-5xl text-gray-300 font-bold capitalize">
        What I do
      </h1>
    </div>
  );
}

export default Heading;
