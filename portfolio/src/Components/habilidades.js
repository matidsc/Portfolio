import React from 'react'
import '../Styles/habilidades.css'
import Skill from './skill'
import skill from '../JSON/skills.json'
import SectionWrapper from './sectionWrapper'
const Habilidades = () => {


    return (
        <div  id='tecnologias'>
        <SectionWrapper class='content'content={skill.map((skill, index) =>

            <Skill color={skill.color} icono={skill.icono} key={index} nombre={skill.nombre} descripcion={skill.descipcion} />

        )} titulo="Tecnologias"  >


        </SectionWrapper>
        </div>
    )
}
export default Habilidades