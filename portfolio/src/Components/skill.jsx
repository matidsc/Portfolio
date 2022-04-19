import React from 'react'
import * as FontAwesome from 'react-icons/di';
import '../Styles/skill.scss'

const Icon = ({iconName, size, color}) => {
    const icon = React.createElement(FontAwesome[iconName]);
    return <div style={{ fontSize: size, color: color }}>{iconName?icon:null}</div>;
  };

const Skill = props => {
    return (
        <div className='habilidad'>
            <h2>{props.nombre}</h2>
             <Icon iconName={props.icono} size='400%' color={props.color}/>
        </div>
    )
}
export default Skill