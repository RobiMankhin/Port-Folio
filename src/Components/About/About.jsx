import coder from "../../assets/coder.svg";
import cv from "../../assets/RobiCv(01789110227).pdf";
import { SiReaddotcv } from "react-icons/si";
import { IoInformationCircleOutline } from "react-icons/io5";
import Skills from "./Skills";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import infoImg from "../../assets/info2.png";
// src\assets\info1.png
const About = () => {
  const [topup, setTopup] = useState(false);

  return (
    <div className="flex flex-col mt-20">
      {topup && <PersonalInfo setTopup={setTopup} />}
      <h1 className="text-3xl mt-16 font-bold mx-auto">About Me</h1>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-14 items-center">
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
              <button className="flex py-1 w-[140px] text-gray-800 hover:scale-105 duration-300 items-center rounded-lg font-semibold justify-center gap-2 shadow-lg shadow-gray-300   ">
                My CV
                <SiReaddotcv className="text-xl" />
              </button>
            </a>
            <button
              onClick={() => setTopup(true)}
              className="flex py-1 w-[150px] text-gray-800 hover:scale-105 duration-300 items-center rounded-lg font-semibold justify-center gap-1 shadow-lg shadow-gray-300   "
            >
              <span>Personal Info</span>
              {/* <IoInformationCircleOutline className="text-xl" /> */}
              <img className="size-6" src={infoImg} />
            </button>
          </div>
          <p className="lg:w-[480px] md:w-[420px] w-[350px] text-center lg:text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus iure fugit officiis magni in corporis dignissimos
            voluptatem aut deleniti alias.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
