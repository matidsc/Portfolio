import React from 'react';
import SectionWrapper from '../containers/sectionWrapper';
import AboutCard from './aboutCard';
import aboutES from '../JSON/aboutES.json'
import aboutEN from '../JSON/aboutEN.json'
import {HiDownload} from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
const About =()=>{
    
    const[t,i18n]=useTranslation("global")
    let origen=i18n.language==='en'?aboutEN:aboutES

    return(
        <div id='about' className='about'>
       <SectionWrapper tipo='aboutCards' titulo={t('about.about_title')}>
        <div id='timeline'>
        {origen.map((card,index)=>
            <AboutCard key={index} titulo={card.Nombre} year={card.Year} infoContent={card.infoContent}/>
       )}
       </div>
       <a href="https://drive.google.com/file/d/1L_gsojEo-hMEZ6mR_nXr2CxmbzIk-4E8/view?usp=sharing" target='_blank'>
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