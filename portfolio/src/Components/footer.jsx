import React from 'react'
import '../Styles/footer.scss'
const Footer = () => {
    return (
        <div id='contacto'className='footerWrapper'>

            <footer>
                    <h1>
                        Trabajemos juntos 
                    </h1>
                <form className='frmFooter'>
                    <h2>Contactame</h2>
                    <input placeholder='Nombre' type='text'/>
                    <input placeholder='Motivo del contacto'type='text'/>
                    <input placeholder='Correo electrónico'type='email'/>
                    <input placeholder='Proyecto o empresa'type='text'/>
                    <textarea cols='40' rows='10' placeholder='Mensaje'type='text'/>
                    <input type='submit' value='Enviar'/>
                </form>
                <small>Portafolio creado con ReactJS</small>
            </footer>

        </div>
    )
}
export default Footer