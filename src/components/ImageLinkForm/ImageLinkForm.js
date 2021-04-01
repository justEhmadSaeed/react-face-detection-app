import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f4'>
				{'This Magic Brain will detect faces in your Pictures. Give it a try.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input
						className='f5 pa3 w-70 center'
						type='text'
						onChange={onInputChange}
					/>
					<button
						onClick={onButtonSubmit}
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm
