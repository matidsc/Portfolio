import React from "react";
import "../Styles/footer.scss";
import i18next from '../i18n'

const Footer = () => {
  return (
    <div id="contacto" className="footerWrapper">
      <footer>
        <h1>{i18next.t('footer_title')}</h1>
        <form
          className="frmFooter"
          action="https://formsubmit.co/6c596858b7fe71f1f4ed52c6d0e8d27a"
          method="POST"
        >
          <h2>{i18next.t('footer_contact_me')}</h2>
          <input type="hidden" name="_captcha" value="false" />
          <input placeholder={i18next.t('footer_name')} type="text" name="Nombre" required />
          <input placeholder={i18next.t('footer_reason')} type="text" name="Motivo" />
          <input
            type="hidden"
            name="_subject"
            value="Nuevo email de portafolio"
          />
          <input
            placeholder={i18next.t('footer_email')}
            type="email"
            name="Email"
            required
          />
          <input
            placeholder={i18next.t('footer_project')}
            type="text"
            name="Empresa o proyecto"
          />
          <textarea
            cols="40"
            rows="10"
            placeholder={i18next.t('footer_message')}
            type="text"
            name="Mensaje"
            required
          />
          <input type="submit" value={i18next.t('footer_send')} />
        </form>
        <small>{i18next.t('footer_bottom_text')}</small>
      </footer>
    </div>
  );
};
export default Footer;
