
import React from 'react'
import '../Styles/navbar.css'
import { FaCode } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const NavBar=()=> {
        
    return(
        
            <nav>
                <div className='content'>
                <FaCode size='40'color='rgb(187, 185, 185)'/>
                <ul>
                    <li><a href=''>Inicio</a></li>
                    <li><a href='#tecnologias'>Tecnologías</a></li>
                    <li><a href=''>Proyectos</a></li>
                    <li><a href=''>Sobre mí</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                </ul>
                <div className='navContact'>
                <FaGithub size='40'color='rgb(187, 185, 185)'/>
                <FaLinkedin size='40'color='rgb(187, 185, 185)'/>

                </div>
                </div>
            </nav>

        
    )
}
export default NavBar