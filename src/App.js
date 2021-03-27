import React, { useState } from 'react'
import './App.css'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

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

	const onInputChange = (event) => setInput(event.target.value)
	const onButtonSubmit = () => {
		console.log('click')
		app.models
			.predict(
				'a403429f2ddf4b49b307e318f00e528b',
				'https://samples.clarifai.com/face-det.jpg'
			)
			.then((response) => {
				console.log(response)
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
			{/* 
			<FaceRecognition /> */}
		</div>
	)
}

export default App
