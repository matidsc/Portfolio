import React from 'react';
import SectionWrapper from '../containers/sectionWrapper';
import AboutCard from './aboutCard';
import cards from '../JSON/about.json'
import {HiDownload} from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
const About =()=>{
    const[t,i18n]=useTranslation("global")

    return(
        <div id='about' className='about'>
       <SectionWrapper class='aboutCards' titulo={t('about.about_title')}>
        <div id='timeline'>
        {cards.map((card,index)=>
            <AboutCard key={index} titulo={card.Nombre} year={card.Year} infoContent={card.infoContent}/>
       )}
       </div>
       <a href="https://drive.google.com/file/d/1A5MCx2kLznx-r_b_IHvLI4dpYUN-3GQg/view?usp=sharing" target='_blank'>
          <div className='cvDownload'>
            <span>{t('about.about_cv')}</span>
            <HiDownload size='40px' color='white'/>
        </div> 
        </a>
       </SectionWrapper>
    
       </div>
       )

}
export default About