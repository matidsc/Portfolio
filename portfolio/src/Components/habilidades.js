import React from 'react'
import stlye from '../Styles/habilidades.css'
import Skill from './skill'
import Skills from './skill'
import skill from '../JSON/skills.json'
const Habilidades = () => {


    return (
        <div className='habilidadesWrapper'>

            <div className='cuadrohabilidades'>
                <h1>Tecnologías</h1>
                <div className='habilidades'>
                        {skill.map((skill,index)=>

                            <Skill color={skill.color} icono={skill.icono} key={index} nombre={skill.nombre} descripcion={skill.descipcion} />
                            
                            )}
                </div>
            </div>

        </div>
    )
}
export default Habilidades