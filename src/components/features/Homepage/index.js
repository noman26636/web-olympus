import React from 'react'
import './index.css'
import Button from '../../common/Button'
import titleLogo from '../../../assets/mainHomePageText.png'
import scrollingIcon from '../../../assets/scrollingArrow.png'

function Homepage() {
	const handleScroll = () => {
		// Scroll to the next page, which is another 100vh down
		window.scrollTo({
			top: window.innerHeight, // Scroll down by the height of the window
			behavior: 'smooth', // Smooth scrolling animation
		})
	}

	return (
		<div className="homepage">
			<div className="homepage_wrapper">
				<img src={titleLogo} alt="Main title" />
				<p>
					Elevate your online presence with cutting-edge design, seamless development, and strategic SEO. Unleash the
					full potential of your digital journey
				</p>
				<Button className="button">Get a Quote</Button>
				<div className="scrolling_container" onClick={handleScroll}>
					<h1>SCROLL</h1>
					<img src={scrollingIcon} alt="Scrolling arrows" />
				</div>
			</div>
		</div>
	)
}

export default Homepage
