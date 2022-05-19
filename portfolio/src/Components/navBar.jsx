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
  return (
    <nav>
      <div className="content">
        <FaCode size="40" color="rgb(187, 185, 185)" />
        <ul className={showNavBar?"navShow":"navHidden"}>
          <li>
            <a href="#heroSection">{t("nav.nav_home")}</a>
          </li>
          <li>
            <a href="#habilidades">{t('nav.nav_skills')}</a>
          </li>
          <li>
            <a href="#proyectos">{t('nav.nav_projects')}</a>
          </li>
          <li>
            <a href="#about">{t('nav.nav_about')}</a>
          </li>
          <li>
            <a href="#contacto">{t('nav.nav_contact')}</a>
          </li>
        </ul>
        <div className="navContact">
          <a
            title="Github"
            href="https://github.com/matidsc"
            target="_blank"
          >
            <FaGithub size="30" color="rgb(187, 185, 185)" />
          </a>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/MatiasDaSilva-178625212"
            target="_blank"
          >
            <FaLinkedin size="30" color="rgb(187, 185, 185)" />
          </a>
          <a
            title="Resume"
            href="https://drive.google.com/file/d/1L_gsojEo-hMEZ6mR_nXr2CxmbzIk-4E8/view?usp=sharing"
            target="_blank"
          >
            <RiPagesLine size="30" color="rgb(187, 185, 185)" />
          </a>
          <LanguageSwitch/>
        </div>
        <span onClick={()=>setShowNavBar(!showNavBar)} className="hamburgerWrapper">
      
          <CgMenuRight className="hamburger" size="30" color="rgb(187, 185, 185)" />
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
