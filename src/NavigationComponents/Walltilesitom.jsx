import React from 'react'
import Footer from '../Home/Footer'
import '../NavigationComponents/Walltilesitem.css'

function Walltilesitom(props) {
  return (
      
        <div className="itoms">
            <img src={props.image} alt="" />
            <p>{props.number}</p>
        </div>
      
  )
}

export default Walltilesitom
