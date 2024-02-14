import React from 'react'
import './index.css'
import { ReactComponent as Title } from '../../../assets/updates/title.svg'
import { ReactComponent as FirstImage } from '../../../assets/updates/UpdateImage.svg'
import { ReactComponent as SecondImage } from '../../../assets/updates/SecondUpdateImage.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/updates/arrowVector.svg'
import Button from '../../common/Button'
import UpdatesContainer from './UpdatesContainer'

const latestUpdate = [
	{
		component: FirstImage,
		domain: 'UI/UX',
		title: 'How To Design A Logo? A Complete Guide',
		description:
			'A logo roadmap to gather ideas, pick colors, fonts, symbols. This article guides you from start to finish in creating your perfect logo.',
		arrowComponent: ArrowIcon,
	},
	{
		component: SecondImage,
		domain: 'UI/UX',
		title: 'How to Create a Design System in Figma?',
		description:
			'A step-by-step guide to create a design system in Figma. This article aims to provide you with valuable tips and advice on how to effectively begin establishing your own Design System using figma components strategy.',
		arrowComponent: ArrowIcon,
	},
]
const LatestUpdates = () => {
	return (
		<div className="updates_container">
			<div className="updates_wrapper">
				<div>
					<h6>LATEST UPDATES</h6>
					<Title />
				</div>
				<div className="updates_typography_container">
					<p>
						Explore our insightful blogs for expert perspectives, industry trends, and valuable tips to stay ahead in
						the ever-evolving world of web design, development, and SEO.
					</p>
					<Button forwardIcon>View All Blogs</Button>
				</div>
			</div>
			<div className="latest_updates_container">
				{latestUpdate.map((updateInfo, index) => (
					<UpdatesContainer key={index} updateInfo={updateInfo} count={index + 1} />
				))}
			</div>
		</div>
	)
}

export default LatestUpdates
