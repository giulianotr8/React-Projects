import React from 'react';
import '../style-sheets/reference.css'

function Testimony(props) {
  return (
    <div className='testimony'>
      <img
      className='image'
      src={require(`../images/${props.picture}.png`)}
      alt='Emma-picture'/>
      <div className='text'>
        <p className='name'><strong>{props.name}</strong> in {props.country}</p>
        <p className='position'>{props.position} at <strong>{props.company}</strong></p>
        <p className='content'>"{props.content}"</p>
      </div>
    </div>
  );  
}

export default Testimony;