import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import Work from "../components/Work.js";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works."/>
      <Work title="Projects" />
      <Footer />
    </div>
  )
}

export default Project;