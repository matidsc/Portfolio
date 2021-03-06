import React from 'react'
import '../Styles/section.scss'
const SectionWrapper = (props) => {

    return (
        
        <div className='sectionWrapper' id={props.id}>
                         
            <div className='contentWrapper'>
                <h1 className='titulo'>{props.titulo}</h1>
                <div className={props.tipo}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default SectionWrapper