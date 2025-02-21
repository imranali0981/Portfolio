import React from "react";
import Title from "../title";
import Card from "../card";
import { IoBusinessOutline } from "react-icons/io5";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiSeoLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

export default function Features() {
  return (
    <section
      id="Features"
      className="w-full  pb-20  border-b-[1px] border-gray-600"
    >
      <div className=" pt-5">
        <Title title="Features" des="What I do" />
        <div className="grid grid-cols-3 gap-20">
          <Card
            title="Web development"
            des="I specialize in full-stack web development, crafting scalable, responsive, and high-performance websites using the MERN stack (MongoDB, Express, React, Node.js). From building robust APIs to creating seamless frontend experiences"
            icon={<CgWebsite />}
          />
          <Card
            title="SEO Optimization"
            des="Enhancing website visibility through SEO best practices, including on-page SEO, keyword optimization, site performance improvements, and technical SEO audits. My goal is to help your website rank higher in search engines, driving organic traffic and improving user engagement.
"
            icon={<RiSeoLine />}
          />
          <Card
            title="Data analysation"
            des="Leveraging data-driven insights, I analyze structured and unstructured data to extract valuable information. Whether it's trend prediction, data visualization, or statistical modeling, I use tools like Python, Pandas to turn raw data into actionable intelligence"
            icon={<FaGlobe />}
          />
          <Card
            title="Java app development"
            des="Developing high-performance Java applications with a focus on scalability and maintainability. From desktop applications to backend services, I design and implement efficient, modular, and secure Java-based solutions tailored to business needs."
            icon={<TbBrandReactNative />}
          />
          <Card
            title="Graphic Designing"
            des="Creating visually appealing designs for web, branding, and social media. With a strong understanding of color theory, typography, and UX/UI principles, I design engaging graphics using Adobe Photoshop, Illustrator, and Figma to enhance brand identity and user experience."
            icon={<FaMobile />}
          />
          <Card
            title="Business Strategy"
            des="Helping businesses align technology with their goals, I assist in digital transformation, market research, and product development strategies."
            icon={<IoBusinessOutline />}
          />
        </div>
      </div>
    </section>
  );
}
