import React from 'react'
import Skill from './skill'
import skill from '../JSON/skills.json'
import SectionWrapper from '../containers/sectionWrapper'
const Habilidades = () => {
    
    return (

        <SectionWrapper titulo="Tecnologias" class='content'>
            
            {skill.map((skill, index) =>

            <Skill color={skill.color} icono={skill.icono} key={index} nombre={skill.nombre} descripcion={skill.descipcion} />

        )} 

        </SectionWrapper>
    )}
export default Habilidades