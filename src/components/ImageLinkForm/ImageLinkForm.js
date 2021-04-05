import React from 'react';
import './ImageLinkForm.css';

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
						defaultValue='https://scontent.fkhi5-1.fna.fbcdn.net/v/t1.6435-9/97235140_2596161327298472_6461337611712593920_n.jpg?_nc_cat=110&amp;ccb=1-3&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeGmcllb2JKiXQJHHEaf8W_VXNYfmp9vyUlc1h-an2_JSR_vk95KT7Nt1HWul_BdBxgAI1ddp1tgyuItEgnPcivB&amp;_nc_ohc=RfRdR7-mPo8AX8WJ6B2&amp;_nc_ht=scontent.fkhi5-1.fna&amp;oh=75c2547c49730cae7c2f5f5c03ce5115&amp;oe=60910B48'
						onChange={onInputChange}
						placeholder='Enter an image URL'
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
	);
};

export default ImageLinkForm;
