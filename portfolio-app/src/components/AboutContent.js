import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/assets_updated/React1.png";
import React2 from "../assets/assets_updated/React2.png";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>I'm a software engineer. I build software for low latency applications, automation, as well as simple plug and play systems to visualize and make decisions from data. Take a look at a couple dashboards I have created on the right in React.js!</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true"/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;