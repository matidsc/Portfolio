import React from "react";
import SectionWrapper from "../containers/sectionWrapper";
import Proyect from "./proyect";
import proyectos from "../JSON/proyects.json";
import i18next from '../i18n'

const Proyectos = () => {
  var cur_lang=i18next.language
  return (
    <SectionWrapper class="projectCards" titulo={i18next.t('projects_title')} id='proyectos'>
      
      {proyectos.map((proyecto, index) => {
       
        return <Proyect key={index} tecnologias={proyecto.Tecnologias} titulo={proyecto.Titulo} descripcion={proyecto.Descripcion} github={proyecto.Github} imagen={proyecto.imagen} live={proyecto.Live} 
        
        />})}
    </SectionWrapper>
  );
};
export default Proyectos;
