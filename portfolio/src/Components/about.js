import React from 'react';
import SectionWrapper from './sectionWrapper';
import AboutCard from './aboutCard';
const About =()=>{
    var about =[]
    for (let i = 0; i < 4; i++) {

        about.push(i)
    }
    return(

       <SectionWrapper class='aboutCards' titulo='Sobre mí'
       content={
            about.map(card=>
            <AboutCard year='2018'/>
            )
       }
       />
    
       )

}
export default About