import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../index.css";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:imranali529081@example.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="Footer" className="text-white py-8 pl-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 ">
        <div>
          <h2 className="text-2xl font-bold mb-10">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-800 to-black hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-950 hover:transition-colors duration-500 rounded-full font-semibold"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-10">Quick Links</h2>
          <nav className="space-y-4">
            <Link
              to="Home"
              smooth={true}
              duration={500}
              className="block cursor-pointer  transition-transform text-lg underline-animation"
            >
              Home
            </Link>
            <Link
              to="Features"
              smooth={true}
              duration={500}
              className="block cursor-pointer  transition-transform text-lg underline-animation "
            >
              What I Do
            </Link>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="block cursor-pointer  transition-transform text-lg underline-animation "
            >
              Projects
            </Link>
            <Link
              to="Resume"
              smooth={true}
              duration={500}
              className="block cursor-pointer  transition-transform text-lg underline-animation "
            >
              Resume
            </Link>
            <Link
              to="Footer"
              smooth={true}
              duration={500}
              className="block cursor-pointer  transition-transform text-lg underline-animation "
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-10">Follow Me</h2>
          <div className="flex flex-col gap-y-6">
            <a
              href="https://www.facebook.com/profile.php?id=100038440632598"
              target="_black"
              className="text-lg hover:text-blue-600 flex items-center gap-3 "
            >
              <FaFacebook className="text-2xl" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/imran-ali-278258212/"
              target="_black"
              className="text-lg hover:text-blue-600 flex items-center gap-3 "
            >
              <FaLinkedinIn className="text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/imranali0981"
              target="_black"
              className="text-lg hover:text-blue-600  items-center flex gap-3"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
