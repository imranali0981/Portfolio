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
          des="A web-based real-time messaging application built using MERN stack with Socket.io for instant communication. It supports:
✅ One-on-one and group chats
✅ User authentication & secure login
✅ Real-time message updates with WebSockets "
          source={pic1}
        />
        <ProjectCard
          title="Hostel Management system"
          des="Developed during my internship at Folio3, DormMate is a Web Base hostel management system, it features:
✅ User authentication & role-based access
✅ Room & bed allocation management
✅ Complaint & maintenance request tracking"
          source={pic2}
        />
        <ProjectCard
          title="Weather App"
          des="A simple and intuitive weather forecasting application built using React.js and OpenWeather API. Features:
✅ Search for weather by city name
✅ Live temperature, humidity, and wind speed updates
✅ 5-day weather forecast with icons "
          source={pic3}
        />
        <ProjectCard
          title="To Do List"
          des="A task management app designed to help users stay organized and track daily tasks efficiently. Built with React.js and local storage. Features:
✅ Add, edit, and delete tasks
✅ Mark tasks as completed "
          source={pic4}
        />
        <ProjectCard
          title="Travel Management System"
          des="A web-based platform designed for managing and booking travel experiences. Developed with MERN stack, the system includes:
✅ User registration & login
✅ Search & filter travel destinations"
          source={pic2}
        />
        <ProjectCard
          title="Flex Clone"
          des="A learning management system (LMS) clone inspired by Flex, built using MERN stack. It helps students and educators manage online courses. Features:
✅ User authentication (Students & Instructors)
✅ Course creation & enrollment"
          source={pic5}
        />
      </div>
    </section>
  );
}

export default Projects;
