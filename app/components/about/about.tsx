"use client";

import Image from "next/image";
import ProfilePic from "@/public/raul.jpg";
import { useEffect, useState, useRef, ReactElement } from "react";
import Link from "next/link";

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
    <div className="w-full flex flex-col items-center text-white lg:mt-10">
      {/* Mobile About */}

      {/* Hero */}
      <div className="flex flex-col w-8/12 h-96 justify-center items-center text-center lg:w-3/12">
        <h1 className="text-5xl font-bold">Raul Calero</h1>
        <h1 className="text-3xl text-slate-300 font-bold mb-10 italic">
          Software Developer
        </h1>
        <p>I specialize in {skillCycle}</p>

        <div className="flex w-full justify-between mt-5">
          <Link
            href="#contact"
            className="border-2 border-white border-opacity-50 rounded-2xl py-1 px-4 shadow-violet-600/30 shadow-xl lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out lg:hover:shadow-violet-600"
          >
            Hire Me
          </Link>
          <Link
            href="#projects"
            className="border-2 border-white border-opacity-50 rounded-2xl py-1 px-4 shadow-violet-600/30 shadow-xl lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out lg:hover:shadow-violet-600"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* About Me */}
      <div
        className="w-full flex items-center justify-between bg-white bg-opacity-10 py-5 px-10 lg:w-1/2 lg:mb-20 lg:rounded-xl"
        id="about"
      >
        <Image
          src={ProfilePic}
          alt="raul-profile"
          className="w-32 h-32 rounded-xl shadow-violet-600 shadow-2xl"
        />
        <div className="flex flex-col ml-3">
          <h2 className="text-2xl">About Me</h2>
          <p className="text-sm">
            Skilled software engineer with expertise in Next.js, React.js, and
            Node.js. Proficient in Agile methodologies and full stack
            development, including Python and database management. Known for
            strong problem-solving and communication skills, adept at enhancing
            team productivity and project success in dynamic tech environments.
          </p>
        </div>
      </div>

      {/* My Skills */}
      <div className="w-full flex flex-col items-center mb-5 py-10 px-4 bg-gradient-to-bl from-sky-600 via-violet-500 to-sky-600">
        <h2 className="text-2xl mb-3">My Skills</h2>
        <div className="lg:flex lg:flex-col lg: items-center">
          {/* Top */}
          <div className="flex mb-4 lg:w-3/4 lg:text-center">
            <div className="bg-red-500 mr-4 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg lg:h-48">
              <h3 className="mb-2 text-lg">Front-End:</h3>
              <p className="text-sm">
                HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js,
                Next.js
              </p>
            </div>
            <div className="bg-red-500 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg lg:h-48">
              <h3 className="mb-2 text-lg">Back-End & Databases:</h3>
              <p className="text-sm">
                Python, Flask, Node.js, Express, EC2, S3, MySQL, PostgreSQL
              </p>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex lg:w-3/4 lg:text-center">
            <div className="bg-red-500 mr-4 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg lg:h-48">
              <h3 className="mb-2 text-lg">Development & Deployment:</h3>
              <p className="text-sm">
                Agile, Scrum, RESTful APIs, OAuth, GitHub, Git, Jest, Knex,
                Linux
              </p>
            </div>
            <div className="bg-red-500 w-1/2 h-11/12 flex flex-col justify-center p-4 rounded-2xl shadow-black/60 shadow-lg lg:h-48">
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
      <div
        className="w-11/12 py-20 flex flex-col items-center lg:mb-14"
        id="projects"
      >
        <h2 className="text-2xl mb-3">My Projects</h2>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col text-center justify-center items-center w-80 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl portfolio-image-3 bg-blend-overlay lg:w-2/6 lg:h-72 lg:my-6">
            <h3 className="mb-5 text-xl text-violet-500 font-bold">
              Claimtrade
            </h3>
            <p className="mb-3 px-4">
              Claims Trade Marketplace, utilizing Next.js and Node.js,
              facilitates the trading of property claims. Leveraging EC2, RDS,
              and S3, it offers a reliable and secure platform for claim
              exchanges.
            </p>
            <Link
              href={"https://claimtrade.app/"}
              className="border-2 py-1 px-5 rounded-2xl text-sm lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
            >
              See Application
            </Link>
          </div>
          <div className="flex flex-col text-center justify-center items-center w-80 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl portfolio-image-1 bg-blend-overlay lg:w-2/6 lg:h-72 lg:my-6">
            <h3 className="mb-5 text-xl text-violet-500 font-bold">Spark GG</h3>
            <p className="mb-3 px-4">
              Esports Statistics app that uses React.js and Node.js for esports
              data analysis, providing real-time insights and interactive
              visuals for match trends and player performance.
            </p>
            <Link
              href={
                "https://github.com/TheCaptainKimchi/raul-calero-capstone-client"
              }
              className="border-2 py-1 px-5 rounded-2xl text-sm lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
            >
              See Repo
            </Link>
          </div>
          <div className="flex flex-col text-center justify-center items-center w-80 h-60 mb-4 rounded-xl shadow-black/70 shadow-xl portfolio-image-2 bg-blend-overlay lg:w-2/6 lg:h-72 lg:my-6">
            <h3 className="mb-5 text-xl text-violet-500 font-bold">Zero AI</h3>
            <p className="mb-3 px-4">
              Zero AI utilizes sophisticated AI to automate interviews and
              provide detailed scoring of candidates, employing advanced
              algorithms for a streamlined, efficient, and consistent
              recruitment process, enhancing accuracy and productivity.
            </p>
            <div className="py-1 px-5 rounded-2xl text-sm bg-gray-500 border-0 text-gray-200">
              Project Pending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
