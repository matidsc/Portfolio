import React,{useState} from "react";
import "../Styles/navbar.scss";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
const NavBar = () => {
  const [showNavBar,setShowNavBar]=useState(false)
  return (
    <nav>
      <div className="content">
        <FaCode size="40" color="rgb(187, 185, 185)" />
        <ul className={showNavBar?"navShow":"navHidden"}>
          <li>
            <a href="#heroSection">Inicio</a>
          </li>
          <li>
            <a href="#tecnologias">Habilidades</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <div className="navContact">
          <a
            href="https://github.com/matidsc"
            target="_blank"
          >
            <FaGithub size="40" color="rgb(187, 185, 185)" />
          </a>
          <a
            href="https://www.linkedin.com/in/MatiasDaSilva-178625212"
            target="_blank"
          >
            <FaLinkedin size="40" color="rgb(187, 185, 185)" />
          </a>
        </div>
        <span onClick={()=>setShowNavBar(!showNavBar)} className="hamburgerWrapper">
      
          <CgMenuRight className="hamburger" size="30" color="rgb(187, 185, 185)" />
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
