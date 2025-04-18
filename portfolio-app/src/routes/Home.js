import React from 'react'

import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import CertificationsData from "../components/CertificationsData";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work title="Projects"/>
      <Work title="Certifications" data={CertificationsData}/>
      <Footer />
    </div>
  )
}

export default Home
