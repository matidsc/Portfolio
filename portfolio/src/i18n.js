import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "hero_sub": "Frontend Developer",
      "hero_title":"Hi, I'm Matias",
      "hero_contactMe":"Contact me",
      "nav_home":"Home",
      "nav_skills":"Skills",
      "nav_projects":"Projects",
      "nav_about":"About me",
      "nav_contact":"Contact",
      "skills_title":"Skills",
      "projects_title":"Projects",
      "projects_go_to_site":"Go to site",
      "projects_go_to_repository":"Go to repository",
      "projects_site_in_construction":"Site in construction",
      "about_title":"About me",
      "about_cv":"View my CV online",
      "footer_title":"Let's work together",
      "footer_contact_me":"Contact me",
      "footer_name":"Name",
      "footer_reason":"Reason for contacting",
      "footer_email":"Email",
      "footer_project":"Project or company",
      "footer_message":"Message",
      "footer_send":"Send",
      "footer_bottom_text":"Portfolio created with ReactJS"


    }
  },
  es: {
    translation: {
      "hero_sub": "Desarrollador Frontend",
      "hero_title":"Hola, soy Matías",
      "hero_contactMe":"Contact me",
      "nav_home":"Inicio",
      "nav_skills":"Habilidades",
      "nav_projects":"Proyectos",
      "nav_about":"Sobre mí",
      "nav_contact":"Contacto",
      "skills_title":"Skills",
      "projects_title":"Proyectos",
      "projects_go_to_site":"Ir al sitio",
      "projects_go_to_repository":"Ir al repositorio",
      "projects_site_in_construction":"Sitio en construcción",
      "about_title":"Sobre mi",
      "about_cv":"Ver mi currículum online",
      "footer_title":"Trabajemos juntos",
      "footer_contact_me":"Contactame",
      "footer_name":"Nombre",
      "footer_reason":"Motivo del contacto",
      "footer_email":"Correo electrónico",
      "footer_project":"Proyecto o empresa",
      "footer_message":"Mensaje",
      "footer_send":"Enviar",
      "footer_bottom_text":"Portafolio creado con ReactJS"
      
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;