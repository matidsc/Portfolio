import React, { useState } from "react";
import "../Styles/languageSwitch.scss";
import { useTranslation } from "react-i18next";
import Flags from "country-flag-icons/react/3x2";

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation("global");
  const [buttonSwtich, setbuttonSwtich] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="langWrapper">
      {buttonSwtich ? (
        <button onClick={() => {changeLanguage("es");setbuttonSwtich(!buttonSwtich)}}>
          <Flags.US title="English" />
        </button>
      ) : (
        <button onClick={() => {changeLanguage("en");setbuttonSwtich(!buttonSwtich)}}>
                    <Flags.ES title="Español" />

        </button>
      )}
    </div>
  );
};

export default LanguageSwitch;
