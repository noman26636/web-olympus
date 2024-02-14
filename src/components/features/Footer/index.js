import React from 'react'
import './index.css'
import { ReactComponent as Ellipse } from '../../../assets/footer/ellipse.svg'
import titleLogo from '../../../assets/footer/logoIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/socialMedia/twitter.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/socialMedia/instagram.svg'
import { ReactComponent as LinkedInIcon } from '../../../assets/socialMedia/linkedIn.svg'
import { ReactComponent as BeIcon } from '../../../assets/socialMedia/be.svg'

const socialMediaAccounts = [
	{ icon: TwitterIcon, name: 'Twitter' },
	{ icon: InstagramIcon, name: 'Instagram' },
	{ icon: LinkedInIcon, name: 'LinkedIn' },
	{ icon: BeIcon, name: 'Be' },
]

const footerContent = [
	{
		id: 1,
		mainTitle: 'Quick Links',
		subCategory: ['About Us', 'Pricing Table', 'Contact Us', 'Meet Our Team', 'Latest News'],
	},
	{
		id: 2,
		mainTitle: 'Company',
		subCategory: ['Case Studies', ' FAQ’s', 'Services', 'Customer Support'],
	},
	{
		id: 3,
		mainTitle: 'Legal',
		subCategory: ['Privacy Policy', 'Terms of Use'],
	},
]

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_wrapper">
				<div className="content">
					<div className="logo_container">
						<h1 className="logo">
							Web <img src={titleLogo} alt="Title logo" />
							lympus
						</h1>
						<div className="socialMedia_links">
							{socialMediaAccounts.map((socialMediaAccount, index) => (
								<div key={index}>
									<socialMediaAccount.icon />
								</div>
							))}
						</div>
					</div>
					<div className="content_container">
						{footerContent.map((content) => (
							<div key={content.id} className="content_wrapper">
								<h2>{content.mainTitle}</h2>
								<div className="category">
									{content.subCategory.map((singleCategory, index) => (
										<h6 key={index}>{singleCategory}</h6>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bottom_line" />
		</div>
	)
}

export default Footer
