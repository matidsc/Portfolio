import React from "react";
import SectionWrapper from "../containers/sectionWrapper";
import Proyect from "./proyect";
import proyectos from "../JSON/proyects.json";
const Proyectos = () => {
  return (
    <SectionWrapper class="projectCards" titulo="Proyectos" id='proyectos'>
      
      {proyectos.map((proyecto, index) => {
       
        return <Proyect key={index} tecnologias={proyecto.Tecnologias} titulo={proyecto.Titulo} descripcion={proyecto.Descripcion} github={proyecto.Github} imagen={proyecto.imagen} live={proyecto.Live} 
        
        />})}
    </SectionWrapper>
  );
};
export default Proyectos;
