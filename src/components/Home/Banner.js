import React from "react";
import LeftBanner from "./LeftBanner";

export default function Banner() {
  return (
    <section
      id="Home"
      className="w-full py-20 flex items-center font-titleFont border-b-[1px] border-gray-600"
    >
      <LeftBanner />
    </section>
  );
}
