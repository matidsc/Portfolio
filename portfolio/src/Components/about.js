import React from 'react';
import SectionWrapper from './sectionWrapper';
import AboutCard from './aboutCard';
import cards from '../JSON/about.json'

/*      <div className='hola'>
            <h1></h1>
        </div> 
*/
const About =()=>{

    return(
        <div id='about'>
       <SectionWrapper class='aboutCards' titulo='Sobre mí'>
              
        {cards.map(card=>
            <AboutCard titulo={card.Nombre} year={card.Year} infoContent={card.infoContent}/>
       )}
       </SectionWrapper>
       </div>
       )

}
export default About