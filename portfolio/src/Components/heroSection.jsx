import React from 'react'
import '../Styles/heroSection.scss'
import heroImage from '../Images/heroImage.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useTranslation } from 'react-i18next';

function HeroSection() {
    const[t,i18n]=useTranslation("global")
    
    return (
        <div className='wrapper' id='heroSection'>

            <div className='heroWrapper'>
            <img src={heroImage} className='heroImage' />

                <h1>
                    {t("hero.hero_title")}
                </h1>

                <h2>
                    {t('hero.hero_sub')
}
                </h2>
                <a className='contactameBtn' href='#contacto'> <button>
                    {t('hero.hero_contactMe')}
                </button></a>
               
                
               <a className='arrow' href='#tecnologias'><MdKeyboardArrowDown size='32'color='white' /></a> 

            </div>
        </div>
    )
}
export default HeroSection