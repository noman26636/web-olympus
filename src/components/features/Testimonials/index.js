import React from 'react'
import './index.css'
import mainTitle from '../../../../src/assets/testimonials/mainTitle.png'
import { ReactComponent as BackwardButton } from '../../../assets/testimonials/backwardCarousel.svg'
import { ReactComponent as ForwardButton } from '../../../assets/testimonials/forwardCarousel.svg'
import { ReactComponent as GoldenLine } from '../../../assets/testimonials/goldenLine.svg'
import { ReactComponent as VectorBottom } from '../../../assets/testimonials/vectorbottomLine.svg'
import { ReactComponent as SideCurveVectors } from '../../../assets/testimonials/sideCurveVectors.svg'
import { ReactComponent as Avatar } from '../../../assets/testimonials/avatar.svg'
import { ReactComponent as Quote } from '../../../assets/quote.svg'

const typographyContent = [
	'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."',
]

const Testimonials = () => {
	return (
		<div className="testimonials_container">
			<div className="testimonials_wrapper">
				<div>
					<h6 className="subtitle">Testimonials</h6>
					<img src={mainTitle} alt="Main titlea" />
				</div>
				<div className="buttons_container">
					<BackwardButton className="forward_button" />
					<ForwardButton className="backward_button" />
				</div>
			</div>
			<div className="root_container">
				{typographyContent.map((content) => (
					<div className="typography_container">
						<div className="goldenLine">
							<GoldenLine />
						</div>
						<div className="typography_wrapper">
							<p>{content}</p>
						</div>
						<div className="vectorBottomContainer">
							<VectorBottom />
						</div>
						<div className="sideCurveVectorContainer">
							<SideCurveVectors />
						</div>
						<div className="customer_profile_container">
							<div className="customer_profile_wrapper">
								<Avatar />
								<div className="typography">
									<div>
										<h5>Chester Feil</h5>
										<body>customer</body>
									</div>
									<Quote />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Testimonials
