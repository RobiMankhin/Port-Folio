import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Bot from "./Bot";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const Header = ({ activeLink, handleClick, nav, handleNav }) => {
  return (
    <div className="relative">
      {/* Desktop Navigation */}
      {/* bg-emerald-400  */}
      <nav className="md:block fixed hidden rounded-full w-[270px] z-40 lg:right-40 md:right-2 top-1">
        <ul className="flex justify-center gap-8 py-2">
          <Link
            to="header"
            smooth={true}
            duration={500}
            onClick={() => handleClick("header")}
          >
            <li
              className={`rounded-full  bg-emerald-400 hover:text-gray-600 duration-300 p-2 text-lg cursor-pointer ${
                activeLink === "header" ? "scale-125" : ""
              }`}
            >
              <FaHome className="" />
            </li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleClick("about")}
          >
            <li
              className={`rounded-full bg-emerald-400 p-2 text-lg hover:text-gray-600 duration-300 cursor-pointer ${
                activeLink === "about" ? "scale-125" : ""
              }`}
            >
              <GiSkills />
            </li>
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => handleClick("portfolio")}
          >
            <li
              className={`rounded-full bg-emerald-400 p-2 text-lg hover:text-gray-600 duration-300 cursor-pointer ${
                activeLink === "portfolio" ? "scale-125" : ""
              }`}
            >
              <GrProjects />
            </li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleClick("contact")}
          >
            <li
              className={`rounded-full bg-emerald-400 p-2 text-lg hover:text-gray-600 duration-300 cursor-pointer ${
                activeLink === "contact" ? "scale-125" : ""
              }`}
            >
              <MdContactPhone />
            </li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div
        className="fixed md:hidden z-30 right-2 top-2 cursor-pointer"
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={23} />}
      </div>

      <nav
        className={`ease-in-out duration-700 ${
          nav ? "translate-y-0" : "-translate-y-56"
        } fixed md:hidden rounded-full z-40 left-1 top-2`}
      >
        <ul className="flex flex-col items-center gap-3 px-2 py-2">
          <Link
            to="header"
            smooth={true}
            duration={500}
            onClick={() => handleClick("header")}
          >
            <li
              className={`cursor-pointer rounded-full bg-emerald-400 p-2 text-center hover:text-gray-500 duration-300 ${
                activeLink === "header" ? "scale-110" : ""
              }`}
            >
              <FaHome />
            </li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleClick("about")}
          >
            <li
              className={`cursor-pointer rounded-full bg-emerald-400 duration-300 p-2 hover:text-gray-500  ${
                activeLink === "about" ? "scale-125" : ""
              }`}
            >
              <GiSkills />
            </li>
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => handleClick("portfolio")}
          >
            <li
              className={`cursor-pointer bg-emerald-400 rounded-full  p-2 hover:text-gray-500 duration-300 ${
                activeLink === "portfolio" ? "scale-125" : ""
              }`}
            >
              <GrProjects />
            </li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleClick("contact")}
          >
            <li
              className={`cursor-pointer bg-emerald-400 rounded-full  p-2 hover:text-gray-500 duration-300 ${
                activeLink === "contact" ? "scale-125" : ""
              }`}
            >
              <MdContactPhone />
            </li>
          </Link>
        </ul>
      </nav>

      <Bot />

      {/* Scroll Down Button */}
      <Link to="about" smooth={true} duration={500}>
        <button
          onClick={() => handleClick("about")}
          className="hover:animate-up-down-hover md:mt-16 mt-2 mx-auto rounded-md py-2 px-3 w-36 gap-2 font-semibold flex items-center bg-amber-300"
        >
          <span>Scroll Down</span>
          <FaArrowTurnDown />
        </button>
      </Link>
    </div>
  );
};
Header.propTypes = {
  activeLink: PropTypes.string.isRequired,
  nav: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleNav: PropTypes.func.isRequired,
};

export default Header;
