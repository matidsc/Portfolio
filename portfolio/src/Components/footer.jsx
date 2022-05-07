import React from "react";
import "../Styles/footer.scss";
const Footer = () => {
  return (
    <div id="contacto" className="footerWrapper">
      <footer>
        <h1>Trabajemos juntos</h1>
        <form
          className="frmFooter"
          action="https://formsubmit.co/6c596858b7fe71f1f4ed52c6d0e8d27a"
          method="POST"
        >
          <h2>Contactame</h2>
          <input type="hidden" name="_captcha" value="false" />
          <input placeholder="Nombre" type="text" name="Nombre" required />
          <input placeholder="Motivo del contacto" type="text" name="Motivo" />
          <input
            type="hidden"
            name="_subject"
            value="Nuevo email de portafolio"
          />
          <input
            placeholder="Correo electrónico"
            type="email"
            name="Email"
            required
          />
          <input
            placeholder="Proyecto o empresa"
            type="text"
            name="Empresa o proyecto"
          />
          <textarea
            cols="40"
            rows="10"
            placeholder="Mensaje"
            type="text"
            name="Mensaje"
            required
          />
          <input type="submit" value="Enviar" />
        </form>
        <small>Portafolio creado con ReactJS</small>
      </footer>
    </div>
  );
};
export default Footer;
