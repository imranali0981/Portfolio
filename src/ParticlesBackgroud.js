import React from "react";
import Particles from "react-particles-js";
import particlesconfig from "./Particlesconfig";

export default function ParticlesBackgroud() {
  return (
    <div>
      <Particles params={particlesconfig} />
    </div>
  );
}
