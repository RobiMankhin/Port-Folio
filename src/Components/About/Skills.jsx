import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div className=" mt-10 items-center flex flex-col p-4 ">
      <h2 className="text-xl font-semibold lg:w-[700px] md:w-[420px] w-[250px]">
        I am proficient in some of these skills. There is more on the list soon.
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-14 mt-5">
        <div className="text-green-800 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg ">
          <TiHtml5 className="md:size-[130px] size-[100px] " />
        </div>
        <div className="text-gray-500 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
          <RiTailwindCssFill className="md:size-[130px] size-[100px] " />
        </div>
        <div className="text-blue-400 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
          <FaReact className="md:size-[130px] size-[100px] " />
        </div>
        <div className="text-blue-700 duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
          <SiRedux className="md:size-[130px] size-[100px] " />
        </div>
        <div className=" duration-300 hover:scale-110 shadow-xl shadow-slate-400 p-2 rounded-lg">
          <FaGithub className="md:size-[130px] size-[100px] " />
        </div>
      </div>
    </div>
  );
};

export default Skills;
