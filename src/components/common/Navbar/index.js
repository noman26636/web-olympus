import React from 'react'
import './index.css'
import Button from '../Button'
import titleLogo from '../../../assets/titleLogo.png'

const tabs = ['Services', 'Portfolio', 'About us']

function Navbar() {
	return (
		<div className="navbar">
			<div>
				<h1 className="nav_title">
					Web <img src={titleLogo} alt="Title logo" />
					lympus
				</h1>
			</div>
			<div className="tab_container">
				{tabs?.map((tab, index) => (
					<div key={index} className="tab">
						{tab}
					</div>
				))}
			</div>
			<Button forwardIcon>Contact us</Button>
		</div>
	)
}

export default Navbar
