import { TiSocialLinkedinCircular } from "react-icons/ti";
import robiImg from "../../assets/robiImg1.png";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Bot = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-28 items-center justify-center md:mt-32 md:py-10 py-7 ">
      <div className="overflow-hidden">
        <img
          className="animate-profile border-x-2 border-y-4 border-gray-700 rounded-full w-[220px] md:h-[300px] md:w-[250px] object-cover"
          src={robiImg}
          alt=""
        />
      </div>
      <div className="flex md:gap-7 gap-1 items-center md:items-start  flex-col ">
        <div className="flex gap-2 items-center">
          <h1 className="md:text-5xl text-2xl font-semibold">Robi Mankhin</h1>
          <button className="rounded-full text-2xl bg-gray-100 border border-gray-800 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
            <MdOutlineDarkMode />
          </button>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="md:text-2xl text-lg font-semibold">
            Front-End Developer
          </h2>
          <div className="flex justify-center md:justify-start rounded-full gap-7">
            <button className="rounded-full text-2xl hover:bg-gray-100 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
              <a
                href="https://github.com/RobiMankhin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:animate-spin" />
              </a>
            </button>
            <button className="rounded-full text-2xl hover:bg-gray-100 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
              <a
                href="https://www.linkedin.com/in/robi-mankhin-608b7b271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedinCircular className="hover:animate-spin" />
              </a>
            </button>
            <button className=" rounded-full text-2xl hover:bg-gray-100 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
              <a
                href="https://x.com/Robi_Mankhin49"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiTwitter className="hover:animate-spin" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
