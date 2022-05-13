import React from "react";
import "../Styles/languageSwitch.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageSwitch = () => {
    const { t } = useTranslation();

  const handleClick = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <div className="langWrapper">
      LanguageSwitch
      <button onClick={() => handleClick("en")}>EN</button>
      <button onClick={() => handleClick("es")}>ES</button>
      <h3>{t('title.1')}</h3>

          </div>
  );
};

export default LanguageSwitch;
