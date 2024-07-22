"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/2.png",
    category: "next js",
    name: "international hospital of tabriz",
    description:
      "a service  and Making an appointment website for international hospital of tabriz",
    link: "https://irdrtop.com/",
    github: "/",
  },
  {
    image: "/work/11.png",
    category: "next js",
    name: "evtap",
    description:
      "a realstate website for selling and buying and assessing properties",
    link: "https://www.evtap.ir/",
    github: "/",
  },
  {
    image: "/work/12.png",
    category: "next js",
    name: "evimistanbull-tab",
    description:
      "an international realstate website for selling and buying and assessing properties",
    link: "https://evimistanbull-tab.ir/",
    github: "/",
  },
  {
    image: "/work/7.jpg",
    category: "fullstack",
    name: "10&10",
    description: "An ecommerce website for selling top brand watches",
    link: "10and10.watch",
    github: "/",
  },

  {
    image: "/work/6.jpg",
    category: "next js",
    name: "architecture App",
    description:
      "fully responsive modern UI/UX website | React.js, Next.js 13, Tailwind CSS",
    link: "/",
    github: "/",
  },
  {
    image: "/work/5.jpg",
    category: "next js",
    name: "hasht academia",
    description: "a platform for learning and sharing knowledge",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "kacharlife",
    description:
      "Modern E-commerce website. Fully responsive and stunning web design.",
    link: "https://kacharlife.com/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react",
    name: "kacharlife pwa",
    description: "An E-commerce pwa with react",
    link: "https://pwa.kacharlife.com/",
    github: "/",
  },
  {
    image: "/work/8.png",
    category: "bootstrap",
    name: "facebook cloned ",
    description: "a ui for social web app",
    link: "/",
    github: "/",
  },

  {
    image: "/work/1.jpg",
    category: "css",
    name: "Gymso-fitness",
    description: "css based website to showcase my abilities in css",
    link: "/",
    github: "https://github.com/miilii9/Gymso-Fitness-website",
  },
  {
    image: "/work/9.png",
    category: "css",
    name: "finanntial-assistence-website",
    description: " css based website to showcase my abilities in css",
    link: "/",
    github: "https://github.com/miilii9/finanntial-assistence-website",
  },
  {
    image: "/work/10.png",
    category: "react",
    name: "E-commerce-website filin",
    description:
      "css,js based E-commerce website demo to showcase my abilities in css and js ",
    link: "/",
    github: "https://github.com/miilii9/makeup-Ecommerce",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12 flex flex-col items-center'>
      <div className='w-full flex flex-col md:container sm:px-10 xl:px-48'>
        <h2 className='section-title text-3xl mb-8 xl:mb-16 text-center mx-auto'>
          پروژه های من
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'>
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
