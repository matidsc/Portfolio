import React from 'react'
import style from '../Styles/heroSection.css'
import heroImage from '../Images/heroImage.svg'
import{ MdKeyboardArrowDown } from 'react-icons/md'
function HeroSection(props) {
    
    return(
        <div className='wrapper'>
 
        <div className='heroWrapper'>
            <h1>
            Hola,<br/> soy Matías
            </h1>

            <h3>
                Desarrollador Front-end
            </h3>
            <button>
                Contactame
            </button>
            <img src={heroImage} className='heroImage'/>
            <MdKeyboardArrowDown/>
            
        </div>
        </div>
    )
}
export default HeroSection