"use client";

import { BsArrowDownRight, BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Transformamos ideias em realidade digital com desenvolvimento web de ponta.",
    link: "/services/web-development",
    icon: <BsFillInfoCircleFill className="text-green-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Criamos aplicativos móveis que encantam os usuários e impulsionam seu negócio.",
    link: "/services/mobile-development",
    icon: <BsFillInfoCircleFill className="text-green-500 text-4xl" />,
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Soluções de e-commerce que aumentam suas vendas e melhoram a experiência do cliente.",
    link: "/services/e-commerce",
    icon: <BsFillInfoCircleFill className="text-green-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Data Analysis",
    description:
      "Análise de dados para decisões mais inteligentes e estratégias mais eficazes.",
    link: "/services/data-analysis",
    icon: <BsFillInfoCircleFill className="text-green-500 text-4xl" />,
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col p-8 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 group cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hovered
            ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-60"
            : "opacity-0"
        }`}
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 text-green-500">{service.icon}</div>
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-3xl font-bold transition-colors duration-300 group-hover:text-white flex-1">
            {service.title}
          </h2>
        </div>
        <p className="text-gray-400 mb-6 group-hover:text-white transition-colors duration-300 text-center">
          {service.description}
        </p>
        <div className="mt-auto">
          <Link href={service.link}>
            <i className="inline-block mt-4 text-green-500 font-semibold hover:text-green-600 transition-colors duration-300">
              Saiba mais
            </i>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold mb-4">Nossos Serviços</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Descubra como nossos serviços podem transformar seu negócio.
            Oferecemos soluções personalizadas para atender às suas necessidades
            específicas e garantir o sucesso.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Contact Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <i className="text-green-500 font-semibold hover:text-green-600 transition-colors duration-300">
              Entre em contato para uma consulta gratuita
            </i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
