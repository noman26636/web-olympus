import React from 'react'
import Homepage from '../../components/features/Homepage'
import AboutUs from '../../components/features/AboutUs'
import WhatWeDo from '../../components/features/WhatWeDo'
import './index.css'
import OurWork from '../../components/features/OurWork'
import Testimonials from '../../components/features/Testimonials'
import LatestUpdates from '../../components/features/LatestUpdates'
import NewsLetter from '../../components/features/NewsLetter'
import ContactUs from '../../components/features/ContactUs'
import Footer from '../../components/features/Footer'

function LandingPage() {
	return (
		<>
			<Homepage />
			<div className="container">
				<AboutUs />
				<WhatWeDo />
				<OurWork />
				<Testimonials />
				<LatestUpdates />
				<NewsLetter />
				<ContactUs />
				<Footer />
			</div>
		</>
	)
}

export default LandingPage
