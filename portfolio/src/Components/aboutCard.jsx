import React from "react";
import "../Styles/aboutCard.scss";
const AboutCard = (props) => {
  return (
    <div className="tl-item">
      <div className="tl-year">
        <p className="f2 heading">{props.year}</p>
      </div>

      <div className="tl-content">
        <h1>{props.titulo}</h1>
        <p>{props.infoContent}</p>
      </div>
    </div>
  );
};
export default AboutCard;
