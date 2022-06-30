import React from 'react'
import './Overlay.css';

function Overlay(props) {
  console.log("Overlay"+props);
  return (
    <div className='overlay'>
      {props.text}
    </div>
  )
}

export default Overlay