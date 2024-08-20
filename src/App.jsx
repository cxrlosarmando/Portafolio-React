import { useState } from 'react'

import './App.css'
import { About } from './Component/About/About';
import { Content } from './Component/Content/Content';
import { Carrusell } from './Component/Slider/Carrusell';
import { Curriculum } from './Component/Curriculum/Curriculum';
import { Cards } from './Component/Cards/Cards';
import { Footer } from './Component/Footer/Footer';
import { SocialButtons } from './Component/SocialButtons/SocialButtons';







function App() {
  return (
    <>
    <About></About>
    <Content/>
    <Curriculum/>
    <SocialButtons/>
    <br></br>
    <Carrusell/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default App
