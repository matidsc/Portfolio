import React from "react";
import "../Styles/languageSwitch.scss";
import { useTranslation } from "react-i18next";
const LanguageSwitch = () => {
  const { t, i18n } = useTranslation("global");

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    }
  
  return (
    <div className="langWrapper">
      <span>{t('language_switch')}</span>
      <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>

          </div>
  );
};

export default LanguageSwitch;
