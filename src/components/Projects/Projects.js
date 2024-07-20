import React from "react";
import Title from "../title";
import ProjectCard from "./ProjectCard";
import pic1 from "../../assets/images/ProjectsImage/chat-App.jpg";
import pic2 from "../../assets/images/ProjectsImage/hostelManagement.png";
import pic3 from "../../assets/images/ProjectsImage/weatherApp.png";
import pic4 from "../../assets/images/ProjectsImage/TodoList.jpeg";
import pic5 from "../../assets/images/ProjectsImage/flexClone.jpg";

function Projects() {
  return (
    <section
      id="Projects"
      className="justify-center border-b-[1px] border-gray-600"
    >
      <div className=" pt-4 text-center">
        <Title title={"Projects"} des={"My Projects"} />
      </div>
      <div className=" grid grid-cols-3 gap-14 pb-10 ">
        <ProjectCard
          title="Real Time Chat Application"
          des="consectetur adipisicing elit. Laborum nesciunt nulla architecto perspiciatis hic similique sit illum necessitatibus. "
          source={pic1}
        />
        <ProjectCard
          title="Hostel Management system"
          des="consectetur adipisicing elit. Laborum nesciunt nulla architecto perspiciatis hic similique sit illum necessitatibus."
          source={pic2}
        />
        <ProjectCard
          title="Weather App"
          des="consectetur adipisicing elit. Laborum nesciunt nulla architecto perspiciatis hic similique sit illum necessitatibus. "
          source={pic3}
        />
        <ProjectCard
          title="To Do List"
          des="consectetur adipisicing elit. Laborum nesciunt nulla architecto perspiciatis hic similique sit illum "
          source={pic4}
        />
        <ProjectCard
          title="Travel Management System"
          des="consectetur adipisicing elit. Laborum nesciunt nulla architecto perspiciatis hic similique sit illum,"
          source={pic2}
        />
        <ProjectCard
          title="Flex Clone"
          des="consectetur adipisicing elit. Laborum nesciunt  necessitatibus. Vel deleniti esse, harum nesciunt facilis "
          source={pic5}
        />
      </div>
    </section>
  );
}

export default Projects;
