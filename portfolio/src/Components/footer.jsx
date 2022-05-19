import React from "react";
import "../Styles/footer.scss";
import { useTranslation } from 'react-i18next';
import {DiGithubBadge} from 'react-icons/di'
const Footer = () => {
  const{t}=useTranslation("global")

  return (
    <div id="contacto" className="footerWrapper">
      <footer>
        <h1>{t('footer.footer_title')}</h1>
        <form
          className="frmFooter"
          action="https://formsubmit.co/6c596858b7fe71f1f4ed52c6d0e8d27a"
          method="POST"
        >
          <h2>{t('footer.footer_contact_me')}</h2>
          <input type="hidden" name="_captcha" value="false" />
          <input placeholder={t('footer.footer_name')} type="text" name="Nombre" required />
          <input placeholder={t('footer.footer_reason')} type="text" name="Motivo" />
          <input
            type="hidden"
            name="_subject"
            value="Nuevo email de portafolio"
          />
          <input
            placeholder={t('footer.footer_email')}
            type="email"
            name="Email"
            required
          />
          <input
            placeholder={t('footer.footer_project')}
            type="text"
            name="Empresa o proyecto"
          />
          <textarea
            cols="40"
            rows="10"
            placeholder={t('footer.footer_message')}
            type="text"
            name="Mensaje"
            required
          />
          <input type="submit" value={t('footer.footer_send')} />
        </form>
        <small>{t('footer.footer_bottom_text')}<a target="_blank" href="https://github.com/matidsc/Portfolio"> <DiGithubBadge size={30}/></a></small>
      </footer>
    </div>
  );
};
export default Footer;
