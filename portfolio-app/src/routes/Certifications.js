import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import Work from "../components/Work.js";
import CertificationsData from "../components/CertificationsData.js";

const Certifications = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CERTIFICATIONS." text="Some of my interests and completed certifications."/>
      <Work title="Certifications" data={CertificationsData}/>
      <Footer />
    </div>
  )
}

export default Certifications;