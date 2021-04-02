import React, { useState } from 'react'
import './App.css'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

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
	const [box, setBox] = useState({})
	const [route, setRoute] = useState('signin')
	const [isSignedIn, setisSignedIn] = useState(false)

	const onInputChange = (event) => setInput(event.target.value)

	const calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box
		const image = document.getElementById('input-image')
		const width = Number(image.width)
		const height = Number(image.height)

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height
		}
	}

	const onButtonSubmit = () => {
		setImageUrl(input)
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, input)
			.then((response) => {
				setBox(calculateFaceLocation(response))
			})
			.catch((err) => console.log(err))
	}
	const onRouteChange = (route) => {
		if (route === 'signout') setisSignedIn(false)
		else if (route === 'home') setisSignedIn(true)

		setRoute(route)
	}

	console.log(box)
	return (
		<div className='App'>
			<Particles className='particles' params={particlesOptions} />
			<Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
			{route === 'home' ? (
				<div>
					<Logo />
					<Rank />
					<ImageLinkForm
						onInputChange={onInputChange}
						onButtonSubmit={onButtonSubmit}
					/>
					<FaceRecognition box={box} imageUrl={imageUrl} />
				</div>
			) : route === 'signin' ? (
				<SignIn onRouteChange={onRouteChange} />
			) : (
				<Register onRouteChange={onRouteChange} />
			)}
		</div>
	)
}

export default App
