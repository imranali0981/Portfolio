import React from "react";
import { saveAs } from "file-saver";
import "animate.css";
import resumePdf from "../assets/resume/ImranAli_Resume.pdf";

const Resume = () => {
  const handleDownload = () => {
    saveAs(resumePdf, "resume.pdf");
  };

  return (
    <div
      id="Resume"
      className="flex flex-col items-center justify-center min-h-screen border-b-[1px] border-gray-600 mb-10"
    >
      <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
        Resume
      </h1>
      <p className="text-xl mb-8 animate__animated animate__fadeInUp">
        Click here to download my resume
      </p>
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-black text-white rounded-full font-semibold animate__animated animate__pulse hover:from-blue-400 hover:to-gray-700"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
