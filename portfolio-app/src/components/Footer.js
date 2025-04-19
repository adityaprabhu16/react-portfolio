import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Twin Cities, Minneapolis</p>
                        <p>Minnesota.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
                        507-339-4520
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        aditya.prabhux16@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me.</h4>
                <p>I am Aditya Prabhu, and I enjoy building practical things. My highlighted projects either have active users, are part of a publication, or are in development for a future launch.</p>
                <div className="social">
                  <a href="https://www.youtube.com/@CanopySystemsTech">
                    <FaYoutube
                        size={30}
                        style={{
                          color: "#fff",
                          marginRight: "1rem"
                        }}
                      />
                    </a>
                  <a href="https://www.instagram.com/canopy_systems_/">
                    <FaInstagram
                        size={30}
                        style={{
                          color: "#fff",
                          marginRight: "1rem"
                        }}
                      />
                  </a>
                  <a href="https://www.linkedin.com/in/adityaprabhu16/">
                    <FaLinkedin
                        size={30}
                        style={{
                          color: "#fff",
                          marginRight: "1rem"
                        }}
                      />
                  </a>
                  <a href="https://github.com/adityaprabhu16">
                    <FaGithub
                        size={30}
                        style={{
                          color: "#fff",
                          marginRight: "1rem"
                        }}
                      />
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
