import React from 'react'
import './index.css'
import titleImage from '../../../..//src/assets/ourWork/title.png'
import Button from '../../common/Button'
import card1 from '../../../../src/assets/ourWork/card1.png'
import card2 from '../../../../src/assets/ourWork/card2.png'
import card3 from '../../../../src/assets/ourWork/card3.png'

const images = [
	{
		id: 1,
		path: card1,
	},
	{
		id: 2,
		path: card2,
	},
	{
		id: 3,
		path: card3,
	},
]

function OurWork() {
	return (
		<div className="our_work">
			<div className="our_work_wrapper">
				<div>
					<h6>PORTFOLIO</h6>
					<img src={titleImage} alt="Main Title image" />
				</div>
				<div>
					<Button forwardIcon>View Portfolio</Button>
				</div>
			</div>
			<div>
				{images.map((image) => (
					<img key={image.id} src={image.path} alt="Cards Image" className='card' />
				))}
			</div>
		</div>
	)
}

export default OurWork
