import React from 'react'
import './index.css'

const UpdatesContainer = ({ updateInfo, count }) => {
	const Image = updateInfo.component
	console.log('Image', Image)
	const ArrowComponent = updateInfo.arrowComponent

	return (
		<div className="updates_container_info">
			<div className="updates_container_info_wrapper">
				<h6>0{count}.</h6>
				<Image />
				<div className="updates_typography">
					<div className="updates_typography_wrapper">
						<h6>{updateInfo.domain}</h6>
						<h5>{updateInfo.title}</h5>
						<p>{updateInfo.description}</p>
					</div>
					<div className="arrowIcon_container">
						<ArrowComponent />
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdatesContainer
