import React from "react";
import SectionWrapper from "../containers/sectionWrapper";
import Proyect from "./proyect";
import projectsES from "../JSON/projectsES.json";
import projectsEN from '../JSON/projectsEN.json'
import { useTranslation } from "react-i18next";

const Proyectos = () => {
  const[t,i18n]=useTranslation("global")
let origen=i18n.language==='en'?projectsEN:projectsES
  return (
    <SectionWrapper tipo="projectCards" titulo={t('projects.projects_title')} id='proyectos'>
       
      
      {origen.map((proyecto, index) => {
       
        return <Proyect key={index} tecnologias={proyecto.Tecnologias} titulo={proyecto.Titulo} descripcion={proyecto.Descripcion} github={proyecto.Github} imagen={proyecto.imagen} live={proyecto.Live} 
        
        />})}
    </SectionWrapper>
  );
};
export default Proyectos;
