import React from 'react'
import '../Styles/habilidades.css'
const SectionWrapper = (props) => {

    return (
        
        <div className='habilidadesWrapper'>

            <div className='cuadrohabilidades'>
                <h1>{props.titulo}</h1>
                <div className='habilidades'>
                    {props.content}

                </div>
            </div>
        </div>
    )
}
export default SectionWrapper