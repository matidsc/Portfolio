import React from 'react'
import '../Styles/heroSection.scss'
import heroImage from '../Images/heroImage.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'
function HeroSection() {

    return (
        <div className='wrapper'>

            <div className='heroWrapper'>
                <h1>
                    Hola,<br/> soy Matías
                </h1>

                <h2>
                    Desarrollador Front-end
                </h2>
                <button>
                    Contactame
                </button>
                <img src={heroImage} className='heroImage' />
                
               <a href='#tecnologias'><MdKeyboardArrowDown size='32'color='white' className='arrow'/></a> 

            </div>
        </div>
    )
}
export default HeroSection