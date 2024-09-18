import { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/InsideHeader/Header";
import PortFolio from "./Components/PORTFOLIO/PortFolio";
import { Element } from "react-scroll";

function App() {
  const [activeLink, setActiveLink] = useState("header");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = (section) => {
    setActiveLink(section);
    if (nav) handleNav();
  };

  return (
    <>
      <Element name="header">
        <Header
          activeLink={activeLink}
          handleClick={handleClick}
          handleNav={handleNav}
          nav={nav}
        />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="portfolio">
        <PortFolio />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer handleClick={handleClick} />
    </>
  );
}

export default App;
