import React from 'react'
import '../Styles/heroSection.scss'
import heroImage from '../Images/heroImage.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import i18next from '../i18n'

function HeroSection() {
console.log(i18next.language)
    return (
        <div className='wrapper' id='heroSection'>

            <div className='heroWrapper'>
            <img src={heroImage} className='heroImage' />

                <h1>
                    {i18next.t("hero_title")}
                </h1>

                <h2>
                    {i18next.t('hero_sub')
}
                </h2>
                <a className='contactameBtn' href='#contacto'> <button>
                    {i18next.t('hero_contactMe')}
                </button></a>
               
                
               <a className='arrow' href='#tecnologias'><MdKeyboardArrowDown size='32'color='white' /></a> 

            </div>
        </div>
    )
}
export default HeroSection