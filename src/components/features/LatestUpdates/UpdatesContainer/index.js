import React from 'react'
import './index.css'

const UpdatesContainer = ({ updateInfo, count }) => {
	const Image = updateInfo.component
	const ArrowComponent = updateInfo.arrowComponent

	return (
		<div className="updates_container_info">
			<div className="updates_container_info_wrapper">
				<h6>0{count}</h6>
				<Image />
				<div className="updates_typography">
					<div className="updates_typography_wrapper">
						<h6>{updateInfo.title}</h6>
						<p>{updateInfo.description}</p>
					</div>
					<ArrowComponent />
				</div>
			</div>
		</div>
	)
}

export default UpdatesContainer
