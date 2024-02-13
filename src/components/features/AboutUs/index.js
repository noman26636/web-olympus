import React from 'react'
import './index.css'
import Button from '../../common/Button'
import aboutUsLogo from '../../..//assets/aboutUs/logo.png'
import vectorIcon from '../../../assets/aboutUs/vectorIcon.png'
import descriptionIcon from '../../../assets/aboutUs/description.png'
import mainImage from '../../../assets/aboutUs/mainImage.png'

function AboutUs() {
    return (
        <div className='about_us'>
            <div className='aboutUs_wrapper'>
                <img src={aboutUsLogo} alt="About us main logo" />
            </div>
            <div className="vector_container">
                <img src={vectorIcon} alt="Vector Icon" />
            </div>
            <div className="text_container">
                <div>
                    <h4>About Us</h4>
                    <img src={descriptionIcon} alt="Description" />
                </div>
                <div className='mainImage_container'>
                    <div className='mainImage_wrapper'>
                        <img src={mainImage} alt="Main Image" />
                        <div className='company_portfolio'>
                            <div className='portfolio_wrapper'>
                                <h1>300+</h1>
                                <h5>Working People</h5>
                            </div>
                            <div className='portfolio_wrapper'>
                                <h1>20+</h1>
                                <h5>Worldwide Offices</h5>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='right_container'>
                        <p>Welcome to Web Olympus, where innovation meets functionality, and your digital presence transforms into a powerful business asset. With a passion for creating stunning, user-centric websites and a commitment to elevating your online visibility, we are your dedicated partner in web redesign, web design and development, and SEO solutions.</p>
                        <Button forwardIcon>Learn more</Button>
                    </div>
            </div>
        </div>
    )
}

export default AboutUs