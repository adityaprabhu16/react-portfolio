import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = ({myData}) => {
  return (
    <div className="project-card">
        <img src={myData.imgsrc} alt="project1"/>
        <h2 className="project-title">{myData.title}</h2>
        <div className="pro-details">
            <p>{myData.text}</p>
            <div className="pro-btns">
                <NavLink to={myData.view} className="btn">View</NavLink>
                <NavLink to="git.com" className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
