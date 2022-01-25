import React from 'react';
import SectionWrapper from './sectionWrapper';
import AboutCard from './aboutCard';
import cards from '../JSON/about.json'
import {HiDownload} from 'react-icons/hi'
const About =()=>{

    return(
        <div id='about'>
       <SectionWrapper class='aboutCards' titulo='Sobre mí'>
              
        {cards.map(card=>
            <AboutCard titulo={card.Nombre} year={card.Year} infoContent={card.infoContent}/>
       )}
          <div className='hola'>
            <h1>Descarga mi currículum</h1>
            <HiDownload size='40px' color='white'/>
        </div> 
        
       </SectionWrapper>
    
       </div>
       )

}
export default About