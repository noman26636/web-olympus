import React from 'react'
import Homepage from '../../components/features/Homepage'
import AboutUs from '../../components/features/AboutUs'
import WhatWeDo from '../../components/features/WhatWeDo'
import './index.css'

function LandingPage() {
  return (
<>
    <Homepage />
    <div className='container'>
    <AboutUs />
    <WhatWeDo />
    </div>
</>
  )
}

export default LandingPage