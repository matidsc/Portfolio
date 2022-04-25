import React from "react";
import "../Styles/proyect.scss";
import img from "../Images/hola.png";
import * as DevIcons from "react-icons/di";

const Icon = ({ iconName, size, color }) => {
  const icon = React.createElement(DevIcons[iconName]);
  return (
    <div style={{ fontSize: size, color: color }}>{iconName ? icon : null}</div>
  );
};
const Proyect = ({
  titulo,
  descripcion,
  github,
  live,
  imagen,
  tecnologias,
}) => {
  /*<img src={require("../img/Servicios/" + imagen[0]).default}></img>*/
  return (
    <div className="proyectWrapper">
      <img src={img} />

      <h1>{titulo}</h1>

      <p>{descripcion}</p>
      <div className="proyect_tech">

        {tecnologias.map((tecnologia, index) => {
          return (
            <Icon
              key={index}
              iconName={tecnologia.nombre}
              size="300%"
              color={tecnologia.color}
            />
          );
        })}
      </div>

      <div className="buttonWrapper">
        <a href={github} className="btn">
          <button>
            <DevIcons.DiGithubBadge size="40" className="buttonIcon" />

            <span>Ir al repositorio</span>
          </button>
        </a>
        <a href={live}>
          <button>Ir a sitio </button>
        </a>
      </div>
    </div>
  );
};
export default Proyect;
