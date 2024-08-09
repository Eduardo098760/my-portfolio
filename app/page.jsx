"use client";
import Photo from "@/components/Photo";
import SocialsMidia from "@/components/SocialsMidia";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 to-black p-6">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-5">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6 ">
              {`Hello i'm`} <br />
              <span className="text-accent">Eduardo Santos</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {` I'm a passionate  software developer with a background in computer
              science. I love building products that make people's lives easier.`}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 "
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <SocialsMidia
                  containerStyles="flex  gap-6 "
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1  xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
