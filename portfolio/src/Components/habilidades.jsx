import React from 'react'
import Skill from './skill'
import skill from '../JSON/skills.json'
import SectionWrapper from '../containers/sectionWrapper'
import { useTranslation } from "react-i18next";

const Habilidades = () => {
    const[t,i18n]=useTranslation("global")

    return (

        <SectionWrapper titulo={t('skills.skills_title')} class='content' id='habilidades'>
            
            {skill.map((skill, index) =>
 
            <Skill color={skill.color} icono={skill.icono} key={index} nombre={skill.nombre} descripcion={skill.descipcion} />

        )} 

        </SectionWrapper>
    )}
export default Habilidades