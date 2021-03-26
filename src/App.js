import React from 'react'
import './App.css'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'

const App = () => {
	return (
		<div className='App'>
			<Navigation />
			<Logo />
			{/* 
			<ImageLinkForm />
			<FaceRecognition /> */}
		</div>
	)
}

export default App
