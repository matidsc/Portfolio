import React from 'react';
import SectionWrapper from '../containers/sectionWrapper';
import AboutCard from './aboutCard';
import cards from '../JSON/about.json'
import {HiDownload} from 'react-icons/hi'
const About =()=>{

    return(
        <div id='about' className='about'>
       <SectionWrapper class='aboutCards' titulo='Sobre mí'>
              
        {cards.map((card,index)=>
            <AboutCard key={index} titulo={card.Nombre} year={card.Year} infoContent={card.infoContent}/>
       )}
       <a href="https://drive.google.com/file/d/1A5MCx2kLznx-r_b_IHvLI4dpYUN-3GQg/view?usp=sharing" target='_blank'>
          <div className='cvDownload'>
            <h1>Ver mi currículum online</h1>
            <HiDownload size='40px' color='white'/>
        </div> 
        </a>
       </SectionWrapper>
    
       </div>
       )

}
export default About