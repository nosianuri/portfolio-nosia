import React from 'react';
import Hero from '../../Components/Section1/Hero';
import Brand from '../../Components/Section2/Brand';
import Portfolio from '../../Components/Section3/Portfolio';
import Services from '../../Components/Section3/Section4/Services';
import About from '../../Components/Section5/About';


function Home() {
  return (
    <div>
      <Hero />
      <Brand />
      <Portfolio />
      <Services />
      <About />
    </div>
  )
}

export default Home