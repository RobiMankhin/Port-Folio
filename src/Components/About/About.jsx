import coder from "../../assets/coder.svg";
import cv from "../../assets/Robi-cv-01851228651.pdf";
import { SiReaddotcv } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import Skills from "./Skills";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
const About = () => {
  const [topup, setTopup] = useState(false);

  return (
    <div className="flex flex-col mt-20">
      {topup && <PersonalInfo setTopup={setTopup} />}
      <h1 className="text-3xl mt-16 font-bold mx-auto">About Me</h1>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-14 justify-center items-center">
        <div className="lg:w-[540px] md:w-[500px] w-[450px]">
          <img className="w-full" src={coder} />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 lg:gap-24">
            <a
              href={cv}
              // download={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="dark:text-lightText dark:bg-lightBackground flex py-1 w-[140px] text-gray-800 hover:scale-105 duration-300 items-center rounded-lg font-semibold justify-center gap-2 shadow-lg shadow-gray-300   ">
                My CV
                <SiReaddotcv className="text-xl" />
              </button>
            </a>
            <button
              onClick={() => setTopup(true)}
              className="flex py-1 w-[150px] dark:text-lightText dark:bg-lightBackground text-gray-800 hover:scale-105 duration-300 items-center rounded-lg font-semibold justify-center gap-1 shadow-lg shadow-gray-300   "
            >
              <span>Personal Info</span>
              <GrContactInfo className=" ml-1 text-xl" />
              {/* <img className="size-6" src={infoImg} /> */}
            </button>
          </div>
          <p className="lg:w-[480px] md:w-[420px] w-[350px] font-semibold text-center lg:text-start ">
            I am an inspired individual with proficiency in Redux Toolkit,
            React, and JavaScript who focuses in creating dynamic applications.
            My ability to develop scalable, maintainable code has improved after
            learning TypeScript. In order to accomplish my objectives and adjust
            to the growing IT world, I have committed to continuous learning.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
