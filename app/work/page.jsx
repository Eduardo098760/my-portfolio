"use client";
import { Button } from "@/components/ui/button";
import { FaBriefcase, FaCalendarAlt, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    link: "/projects/portfolio-website",
    image: "/images/portfolio-website.png",
    date: "Jan 2023",
  },
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform developed with React and Redux.",
    link: "/projects/e-commerce-platform",
    image: "/images/e-commerce-platform.png",
    date: "Sep 2022",
  },
  {
    title: "Dashboard App",
    description: "A customizable dashboard app built with React and D3.js.",
    link: "/projects/dashboard-app",
    image: "/images/dashboard-app.png",
    date: "May 2023",
  },
];

const WorkPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Work</h1>
          <p className="text-lg mb-8">
            {`Here are some of the projects I' ve worked on recently. Click on any
            project to learn more about it.`}
          </p>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className=" rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{project.date}</span>
                  <Link href={project.link}>
                    <i className="text-accent flex items-center gap-2 hover:underline">
                      <FaLink /> View Project
                    </i>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
