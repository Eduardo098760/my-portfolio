import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
} from "react-icons/fa";

const experience = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    period: "Jan 2021 - Present",
    description:
      "Developed and maintained web applications using React and Next.js.",
  },
  {
    title: "Junior Developer",
    company: "Innovate Inc.",
    period: "Jun 2018 - Dec 2020",
    description:
      "Assisted in building and testing new features for e-commerce platforms.",
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
  },
  {
    degree: "Diploma in Information Systems",
    institution: "University of Technology",
    period: "2012 - 2014",
  },
];

const skills = [
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-2xl" />,
  },
  { name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
  { name: "Next.js", icon: <FaCode className="text-gray-300 text-2xl" /> },
  { name: "Tailwind CSS", icon: <FaCode className="text-blue-400 text-2xl" /> },
  { name: "TypeScript", icon: <FaCode className="text-blue-600 text-2xl" /> },
  { name: "Redux", icon: <FaCode className="text-purple-600 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
  { name: "Express.js", icon: <FaCode className="text-gray-600 text-2xl" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-2xl" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-600 text-2xl" /> },
  {
    name: "PostgreSQL",
    icon: <FaDatabase className="text-blue-800 text-2xl" />,
  },
  { name: "AWS", icon: <FaAws className="text-orange-500 text-2xl" /> },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    link: "/projects/portfolio-website",
  },
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform developed with React and Redux.",
    link: "/projects/e-commerce-platform",
  },
];

const certifications = [
  {
    title: "Certified React Developer",
    issuer: "React Academy",
    date: "2023",
  },
  {
    title: "Certified Node.js Developer",
    issuer: "Node.js Foundation",
    date: "2023",
  },
];

const Resume = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-lg mb-8">
            Explore my professional journey and achievements.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2 mx-auto hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <span>Download Resume</span>
            <FiDownload className="text-xl" />
          </Button>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaBriefcase className="text-accent" /> Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-1">{exp.company}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16 bg-gray-800 py-12 px-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-accent" /> Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaCode className="text-accent" /> Skills
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-700 transition-colors duration-300"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mb-16 bg-gray-800 py-12 px-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-accent" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    href={project.link}
                    className="text-accent hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-accent" /> Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-1">Issued by {cert.issuer}</p>
                <p className="text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
