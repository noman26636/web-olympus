import React from 'react'
import './index.css';
import Button from '../../common/Button';
import titleLogo from '../../../assets/mainHomePageText.png'
import scrollingIcon from '../../../assets/scrollingArrow.png'


function Homepage() {
  return (
    <div className='homepage'>
      <div className='homepage_wrapper'>
       <img src={titleLogo} alt="Main title" />
       <p>Elevate your online presence with cutting-edge design, seamless development, and strategic SEO. Unleash the full potential of your digital journey</p>
       <Button className="button">Get a Quote</Button>
       <div className='scrolling_container'>
        <h1>SCROLL</h1>
        <img src={scrollingIcon} alt='Scrolling arrows' />
       </div>
      </div>
    </div>
  )
}

export default Homepage