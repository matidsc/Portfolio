import React from "react";
import "../Styles/proyect.scss";
import img from '../Images/hola.png'
import * as FontAwesome from 'react-icons/di';

const Icon = ({iconName, size, color}) => {
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ fontSize: size, color: color }}>{iconName?icon:null}</div>;
};
const Proyect = ({titulo,descripcion,github,live,imagen,tecnologias}) => {
  /*<img src={require("../img/Servicios/" + imagen[0]).default}></img>*/
  return (
    <div className="proyectWrapper">
      <img src={img}/>

      <h1>{titulo}</h1>
     
      <p>{descripcion}</p>
      <div className="proyect_tech"> {tecnologias.map((tecnologia,index)=>{
        return<Icon key={index} iconName={tecnologia.nombre} size='300%' color={tecnologia.color}/>

      })}</div>
      <div className="buttonWrapper" >
        <button><span><FontAwesome.DiGithubBadge size='40' className="buttonIcon"/></span> <a href={github}>Ir al repositorio</a></button>
        <button><a href={live}>Ir a sitio</a></button>
      </div>
    </div>
  );
};
export default Proyect;
