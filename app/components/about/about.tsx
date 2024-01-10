"use client";

import Image from "next/image";
import ProfilePic from "@/public/raul.jpg";
import { useEffect, useState, useRef, ReactElement } from "react";

export default function About() {
  // State for the current skill
  const [skillCycle, setSkillCycle] = useState<ReactElement | null>(null);
  // State for re-triggering the typing animation
  const [typingKey, setTypingKey] = useState(Date.now());

  // Skills array
  const skillArr = [
    <span
      key={0}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      DEPLOYMENT
    </span>,
    <span
      key={1}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      NEXT.JS
    </span>,
    <span
      key={2}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      REACT.JS
    </span>,
    <span
      key={3}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      NODE.JS
    </span>,
    <span
      key={4}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      PYTHON
    </span>,
    <span
      key={5}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      EC2
    </span>,
    <span
      key={6}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      TAILWIND CSS
    </span>,
    <span
      key={7}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      FLASK
    </span>,
    <span
      key={8}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      EXPRESS.JS
    </span>,
    <span
      key={9}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      MYSQL
    </span>,
    <span
      key={10}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      POSTGRESQL
    </span>,
    <span
      key={11}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      AGILE
    </span>,
    <span
      key={12}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      SCRUM
    </span>,
    <span
      key={13}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      REST API
    </span>,
    <span
      key={14}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      GIT
    </span>,
    <span
      key={15}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      GITHUB
    </span>,
    <span
      key={16}
      className="text-red-400 underline underline-offset-4 font-bold slide-in-left"
    >
      LINUX
    </span>,
  ];

  // useRef to keep track of the current index in the skills array
  let count = useRef(0);

  // useEffect for cycling through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setSkillCycle(skillArr[count.current]);
      count.current++;
      if (count.current === skillArr.length) {
        count.current = 0;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center text-white pb-40">
      {/* Mobile About */}

      {/* Hero */}
      <div className="flex flex-col w-8/12 h-96 justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Raul Calero</h1>
        <h1 className="text-3xl text-slate-300 font-bold mb-10">
          Software Developer
        </h1>
        <p>I specialize in {skillCycle}</p>

        <div className="flex w-full justify-between mt-5">
          <button className="border-2 border-white border-opacity-50 rounded-2xl py-1 px-4 shadow-violet-600/30 shadow-xl">
            Hire Me
          </button>
          <button className="border-2 border-white border-opacity-50 rounded-2xl py-1 px-4 shadow-violet-600/30 shadow-xl">
            Learn More
          </button>
        </div>
      </div>

      {/* About Me */}
      <div className="w-full h-80 flex items-center justify-between bg-white bg-opacity-10 py-5 px-10">
        <Image
          src={ProfilePic}
          alt="raul-profile"
          className="w-32 h-32 rounded-xl shadow-violet-600 shadow-2xl"
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
      <div className="w-screen flex flex-col items-center mb-40 py-10 bg-gradient-to-bl from-sky-600 via-violet-500 to-sky-600">
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
          <div className="flex flex-col text-center justify-center items-center w-80 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl portfolio-image bg-blend-overlay">
            <h3 className="mb-5 text-xl text-violet-500 font-bold">Spark GG</h3>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cumque.
            </p>
            <button className="border-2 py-1 px-5 rounded-2xl text-sm">
              See Repo
            </button>
          </div>
          <div className="flex flex-col text-center justify-center items-center bg-green-700  w-80 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl bg-blend-overlay"></div>
          <div className="flex flex-col text-center justify-center items-center bg-green-700  w-80 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl bg-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
}
