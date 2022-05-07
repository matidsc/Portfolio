import React from 'react'
import '../Styles/heroSection.scss'
import heroImage from '../Images/heroImage.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'
function HeroSection() {

    return (
        <div className='wrapper' id='heroSection'>

            <div className='heroWrapper'>
            <img src={heroImage} className='heroImage' />

                <h1>
                    Hola,<br/> soy Matías
                </h1>

                <h2>
                    Desarrollador Front-end
                </h2>
                <a className='contactameBtn' href='#contacto'> <button>
                    Contactame
                </button></a>
               
                
               <a className='arrow' href='#tecnologias'><MdKeyboardArrowDown size='32'color='white' /></a> 

            </div>
        </div>
    )
}
export default HeroSection