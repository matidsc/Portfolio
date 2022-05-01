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
  
  return (
    <div className="proyectWrapper">
      <img src={imagen}/>

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
        <a
          href={github}
          target="_blank"
          className="btn"
          style={{ alignSelf: live == "undefined" ? "center" : null }}
        >
          <button>
            <DevIcons.DiGithubBadge size="40" className="buttonIcon" />

            <span>Ir al repositorio</span>
          </button>
        </a>

        {typeof live !== "undefined" && live !== "" ? (
          <a href={live}>
            <button>Ir a sitio </button>
          </a>
        ) : (
          typeof live !== "undefined" && (
            <a>
              <button disabled>Sitio en construccion</button>
            </a>
          )
        )}
      </div>
    </div>
  );
};
export default Proyect;
