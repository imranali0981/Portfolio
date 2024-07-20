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
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur, ipsam doloribus dicta ducimus, illum repudiandae temporibu"
            icon={<CgWebsite />}
          />
          <Card
            title="SEO Optimization"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur, ipsam doloribus dicta ducimus, illum repudiandae temporibus"
            icon={<RiSeoLine />}
          />
          <Card
            title="Data analysation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur, ipsam doloribus dicta ducimus, illum repudiandae temporibus"
            icon={<FaGlobe />}
          />
          <Card
            title="Java app development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur, ipsam doloribus dicta ducimus, illum repudiandae temporibu"
            icon={<TbBrandReactNative />}
          />
          <Card
            title="Graphic Designing"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur, ipsam doloribus dicta ducimus, illum repudiandae temporibu"
            icon={<FaMobile />}
          />
          <Card
            title="Business Strategy"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur, ipsam doloribus dicta ducimus, illum repudiandae temporibu"
            icon={<IoBusinessOutline />}
          />
        </div>
      </div>
    </section>
  );
}
