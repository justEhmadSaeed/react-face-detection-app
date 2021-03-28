import React, { useState } from 'react'
import './App.css'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const particlesOptions = {
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 300
			}
		}
	}
}

const app = new Clarifai.App({
	apiKey: 'cf4f0c2c945948578669896929cb81d4'
})
const App = () => {
	const [input, setInput] = useState('')
	const [imageUrl, setImageUrl] = useState('')

	const onInputChange = (event) => setInput(event.target.value)
	const onButtonSubmit = () => {
		console.log('click')
		setImageUrl(input)
		app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then((response) => {
			console.log(response.outputs[0].data.regions)
		})
	}
	return (
		<div className='App'>
			<Particles className='particles' params={particlesOptions} />
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm
				onInputChange={onInputChange}
				onButtonSubmit={onButtonSubmit}
			/>
			<FaceRecognition imageUrl={imageUrl} />
		</div>
	)
}

export default App
