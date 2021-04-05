import React, { useState } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const particlesOptions = {
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 300,
			},
		},
	},
};

const app = new Clarifai.App({
	apiKey: 'cf4f0c2c945948578669896929cb81d4',
});
const App = () => {
	const [input, setInput] = useState(
		'https://scontent.fkhi5-1.fna.fbcdn.net/v/t1.6435-9/97235140_2596161327298472_6461337611712593920_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGmcllb2JKiXQJHHEaf8W_VXNYfmp9vyUlc1h-an2_JSR_vk95KT7Nt1HWul_BdBxgAI1ddp1tgyuItEgnPcivB&_nc_ohc=RfRdR7-mPo8AX8WJ6B2&_nc_ht=scontent.fkhi5-1.fna&oh=75c2547c49730cae7c2f5f5c03ce5115&oe=60910B48'
	);
	const [imageUrl, setImageUrl] = useState('');
	const [box, setBox] = useState({});
	const [route, setRoute] = useState('signin');
	const [isSignedIn, setisSignedIn] = useState(false);

	const onInputChange = (event) => setInput(event.target.value);

	const calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('input-image');
		const width = Number(image.width);
		const height = Number(image.height);

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};

	const onButtonSubmit = () => {
		setImageUrl(input);
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, input)
			.then((response) => {
				setBox(calculateFaceLocation(response));
			})
			.catch((err) => console.log(err));
	};
	const onRouteChange = (route) => {
		if (route === 'signout') setisSignedIn(false);
		else if (route === 'home') setisSignedIn(true);

		setRoute(route);
	};

	console.log(box);
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
	);
};

export default App;
