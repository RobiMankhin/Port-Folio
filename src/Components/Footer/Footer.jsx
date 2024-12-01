import { CiTwitter } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const Footer = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-center bg-slate-200 py-4 h-[160px] mt-16 dark:bg-gray-700 ">
      <h1 className="font-bold text-3xl">Robi</h1>
      <div className="flex gap-8 mt-4 font-semibold text-sm">
        <Link
          className="hover:text-gray-700 dark:text-darkText dark:hover:text-slate-400 cursor-pointer"
          to="header"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onClick={() => handleClick("header")}
        >
          Top
        </Link>
        <Link
          className="hover:text-gray-700 dark:text-darkText dark:hover:text-slate-400 cursor-pointer"
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onClick={() => handleClick("about")}
        >
          About
        </Link>
        <Link
          className="hover:text-gray-700 dark:text-darkText dark:hover:text-slate-400 cursor-pointer"
          to="portfolio"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onClick={() => handleClick("portfolio")}
        >
          PortFolio
        </Link>
      </div>

      <div className="flex justify-center md:justify-start mt-4 rounded-full gap-4">
        <button className="dark:text-darkText dark:hover:bg-darkBackground rounded-full text-xl hover:bg-gray-100 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
          <a
            href="https://www.facebook.com/robi.leo.47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </button>
        <button className="dark:text-darkText dark:hover:bg-darkBackground rounded-full text-2xl hover:bg-gray-100 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
          <a
            href="https://www.linkedin.com/in/robi-mankhin-608b7b271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular />
          </a>
        </button>
        <button className="dark:text-darkText dark:hover:bg-darkBackground  rounded-full text-2xl hover:bg-gray-100 shadow-gray-300 p-1  shadow-lg hover:scale-110 duration-300">
          <a
            href="https://x.com/Robi_Mankhin49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter />
          </a>
        </button>
      </div>
    </div>
  );
};
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
