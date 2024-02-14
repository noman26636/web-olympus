import React from 'react'
import './index.css'
import { ReactComponent as NewsLetterImage } from '../../../assets/newsletter/mainImage.svg'
import { ReactComponent as Title } from '../../../assets/newsletter/title.svg'
import Button from '../../common/Button'

const NewsLetter = () => {
	return (
		<div className="news_letter_container">
			<div className="news_letter_wrapper">
				<div>
					<NewsLetterImage />
				</div>
				<div className="news_letter_typography_container">
					<div className="typography_elements">
						<Title />
						<p>Subscribe to our monthly product updates and valuable tips from our devs.</p>
					</div>
					<div className="input_container">
						<div className="input_wrapper">
							<input placeholder="Enter your Email" />
						</div>
						<Button>Submit</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter
