import React,{useState} from "react";
import "../Styles/navbar.scss";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import {RiPagesLine } from 'react-icons/ri'
import LanguageSwitch from "./languageSwitch";
const NavBar = () => {
  const [showNavBar,setShowNavBar]=useState(false)
  const[t]=useTranslation("global")
  showNavBar && window.matchMedia("(max-width: 768px)").matches
  ? (document.body.style.overflowY = "hidden")
  : (document.body.style.overflowY = "scroll");
  return (
    <nav>
      <div className="content">
        <FaCode size="40" color="rgb(187, 185, 185)" />
        <ul className={showNavBar?"navShow":"navHidden"}>
          <li>
            <a onClick={()=>setShowNavBar(!showNavBar)} href="#heroSection">{t("nav.nav_home")}</a>
          </li>
          <li>
            <a onClick={()=>setShowNavBar(!showNavBar)} href="#habilidades">{t('nav.nav_skills')}</a>
          </li>
          <li>
            <a onClick={()=>setShowNavBar(!showNavBar)} href="#proyectos">{t('nav.nav_projects')}</a>
          </li>
          <li>
            <a onClick={()=>setShowNavBar(!showNavBar)} href="#about">{t('nav.nav_about')}</a>
          </li>
          <li>
            <a onClick={()=>setShowNavBar(!showNavBar)} href="#contacto">{t('nav.nav_contact')}</a>
          </li>
        </ul>
        <div className="navContact">
          <a
            title="Github"
            href="https://github.com/matidsc"
            target="_blank"
          >
            <FaGithub size="25" color="rgb(187, 185, 185)" />
          </a>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/MatiasDaSilva-178625212"
            target="_blank"
          >
            <FaLinkedin size="25" color="rgb(187, 185, 185)" />
          </a>
          <a
            title="Resume"
            href="https://drive.google.com/file/d/12tn2C0N3z6gSTBzMisyaH1A4aAAIU7cW/view?usp=share_link"
            target="_blank"
          >
            <RiPagesLine size="25" color="rgb(187, 185, 185)" />
          </a>
          <LanguageSwitch/>
        </div>
        <span onClick={()=>setShowNavBar(!showNavBar)} className="hamburgerWrapper">
      
          <CgMenuRight className="hamburger" size="40" color="rgb(187, 185, 185)" />
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
