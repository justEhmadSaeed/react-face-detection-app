import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ box, imageUrl }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img
					id='input-image'
					src={imageUrl}
					alt=''
					width='500px'
					height='auto'
				/>
				<div
					className='bounding-box'
					style={{
						top: box.topRow,
						right: box.rightCol,
						left: box.leftCol,
						bottom: box.bottomRow
					}}
				></div>
			</div>
		</div>
	)
}

export default FaceRecognition
