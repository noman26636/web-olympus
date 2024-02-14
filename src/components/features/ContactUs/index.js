import React from 'react'
import './index.css'
import { ReactComponent as Title } from '../../../assets/contactUs/title.svg'
import { ReactComponent as ContactUsContainer } from '../../../assets/contactUs/contactUs.svg'

const ContactUs = () => {
	return (
		<div className="contact_us">
			<div className="contact_us_wrapper">
				<div className="typo_elements">
					<h6>TELL US ABOUT YOUR PROJECT</h6>
					<Title />
				</div>
				<ContactUsContainer />
			</div>
		</div>
	)
}

export default ContactUs
