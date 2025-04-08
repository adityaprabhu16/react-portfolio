import "./WorkCardStyles.css";

import React from 'react'
import WorkCard from "./WorkCard.js";
import WorkCardData from "./WorkCardData.js";

const Work= () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return (
                    <WorkCard 
                    key={ind}
                    myData={val}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work;