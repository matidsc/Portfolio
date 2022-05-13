import React from 'react'
import Skill from './skill'
import skill from '../JSON/skills.json'
import SectionWrapper from '../containers/sectionWrapper'
import i18next from '../i18n'

const Habilidades = () => {
    
    return (

        <SectionWrapper titulo={i18next.t('skills_title')} class='content' id='tecnologias'>
            
            {skill.map((skill, index) =>
 
            <Skill color={skill.color} icono={skill.icono} key={index} nombre={skill.nombre} descripcion={skill.descipcion} />

        )} 

        </SectionWrapper>
    )}
export default Habilidades