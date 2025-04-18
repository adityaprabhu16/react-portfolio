import "./HeroImgStyles.css";


import React from 'react'
import IntroImg from "../assets/assets_updated/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A Software & AI Engineer.</p>
            <h1>Projects Overview.</h1>
            <p className="hero-description">I build intelligent systems, including chatbots, automation, and beautiful applications.</p>
            <div className="hero-btns">
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg