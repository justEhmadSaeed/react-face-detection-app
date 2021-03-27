import React from 'react'
import './App.css'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'

const particlesOptions = {
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 300
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: { enable: true, mode: 'repulse' },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 100, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	}
}
const App = () => {
	return (
		<div className='App'>
			<Particles className='particles' params={particlesOptions} />
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm />
			{/* 
			<FaceRecognition /> */}
		</div>
	)
}

export default App
