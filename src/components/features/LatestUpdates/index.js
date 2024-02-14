import React from 'react'
import './index.css'
import { ReactComponent as Title } from '../../../assets/updates/title.svg'
import { ReactComponent as UpdateImage } from '../../../assets/updates/UpdateImage.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/updates/arrowVector.svg'
import Button from '../../common/Button'
import UpdatesContainer from './UpdatesContainer'

const latestUpdate = [
	{
		component: UpdateImage,
		title: 'UI/UX',
		description:
			'A logo roadmap to gather ideas, pick colors, fonts, symbols. This article guides you from start to finish in creating your perfect logo.',
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
			<div>
				{latestUpdate.map((updateInfo, index) => (
					<UpdatesContainer key={index} updateInfo={updateInfo} count={index + 1} />
				))}
			</div>
		</div>
	)
}

export default LatestUpdates
