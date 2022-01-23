import about from '../JSON/about.json'
import React from 'react';
import '../Styles/aboutCard.css'
const AboutCard=(props)=>{

    return(
        
        <div className='cardWrapper'>
            
            <h1 className='year'>{props.year}</h1>

            <div className='info'>
                <h1>{props.titulo}</h1>
                <p>{props.infoContent}</p>
            </div>
        </div>
    )
}
export default AboutCard