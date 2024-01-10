"use client";

import Image from "next/image";
import ProfilePic from "@/public/raul.jpg";
import { useEffect, useState, useRef } from "react";

export default function About() {
  // Skill Cycle Functionality
  const [skillCycle, setSkillCycle] = useState<string>("DEPLOYMENT");
  const skillArr = [
    "DEPLOYMENT",
    "NEXT.JS",
    "REACT.JS",
    "NODE.JS",
    "PYTHON",
    "EC2",
    "TAILWIND CSS",
    "FLASK",
    "EXPRESS.JS",
    "MYSQL",
    "POSTGRESQL",
    "AGILE",
    "SCRUM",
    "REST API",
    "GIT/GITHUB",
    "LINUX",
  ];
  let count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillCycle(skillArr[count.current]);
      count.current++;
      if (count.current === skillArr.length) {
        count.current = 0;
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center text-white pb-40">
      {/* Mobile About */}

      {/* Hero */}
      <div className="flex flex-col w-8/12 h-96 justify-center items-center">
        <h1 className=" text-5xl font-bold">Raul Calero</h1>
        <h1 className="text-3xl text-slate-300 font-bold">
          Software Developer
        </h1>
        <p>
          I specialize in{" "}
          <span className="text-red-400 underline underline-offset-4">
            {skillCycle}
          </span>
        </p>
        <div className="flex w-full justify-between mt-5">
          <button className="border-2 border-white border-opacity-50 rounded-2xl py-1 px-4">
            Hire Me
          </button>
          <button className="border-2 border-white border-opacity-50 rounded-2xl py-1 px-4">
            Learn More
          </button>
        </div>
      </div>

      {/* About Me */}
      <div className="w-full h-80 flex items-center justify-between bg-white bg-opacity-10 py-5 px-10 mb-16">
        <Image
          src={ProfilePic}
          alt="raul-profile"
          className="w-32 h-32 rounded-xl"
        />
        <div className="flex flex-col ml-3">
          <h2 className="text-2xl">About Me</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            officiis qui reiciendis in doloribus dolore suscipit est, sequi
            vitae aperiam sed beatae molestiae esse. Dolorum.
          </p>
        </div>
      </div>

      {/* My Skills */}
      <div className="w-11/12 flex flex-col items-center mb-40">
        <h2 className="text-2xl mb-3">My Skills</h2>
        <div>
          {/* Top */}
          <div className="flex mb-4">
            <div className="bg-red-500 mr-4 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg">
              <h3 className="mb-2 text-lg">Front-End:</h3>
              <p className="text-sm">
                HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js,
                Next.js
              </p>
            </div>
            <div className="bg-red-500 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg">
              <h3 className="mb-2 text-lg">Back-End & Databases:</h3>
              <p className="text-sm">
                Python, Flask, Node.js, Express, EC2, S3, MySQL, PostgreSQL
              </p>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex">
            <div className="bg-red-500 mr-4 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg">
              <h3 className="mb-2 text-lg">Development & Deployment:</h3>
              <p className="text-sm">
                Agile, Scrum, RESTful APIs, OAuth, GitHub, Git, Jest, Knex,
                Linux
              </p>
            </div>
            <div className="bg-red-500 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg">
              <h3 className="mb-2 text-lg">Soft Skills:</h3>
              <p className="text-sm">
                Problem-Solving, Effective Communication, Teamwork,
                Adaptability, Critical Thinking, Time Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* My Projects */}
      <div className="w-11/12 h-72 flex flex-col items-center">
        <h2 className="text-2xl mb-3">My Projects</h2>
        <div className="w-full flex flex-col items-center">
          <div className="w-3/4 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl portfolio-image"></div>
          <div className="bg-green-700 w-3/4 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl"></div>
          <div className="bg-green-700 w-3/4 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}
