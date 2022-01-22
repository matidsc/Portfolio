import React from 'react'
import '../Styles/habilidades.css'
const SectionWrapper = (props) => {

    return (
        
        <div className='sectionWrapper'>

            <div className='contentWrapper'>
                <h1 className='titulo'>{props.titulo}</h1>
                <div className={props.class}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}
export default SectionWrapper