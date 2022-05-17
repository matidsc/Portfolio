import React from 'react';
import '../Styles/aboutCard.scss'
const AboutCard=(props)=>{
 /* <div className='cardWrapper'>
            
            <h1 className='year'>{props.year}</h1>
            
            <div className='info'>
                <h1>{props.titulo}</h1>
                <p>{props.infoContent}</p>
            </div>
        </div>*/ 
    return(
       
  
  <div className="tl-item">
       
    <div className="tl-year">
      <p className="f2 heading--sanSerif">{props.year}</p>
    </div>

    <div class="tl-content">
      <h1>{props.titulo}</h1>
      <p>{props.infoContent}</p>
    </div>

  </div>

      
    )
}
export default AboutCard