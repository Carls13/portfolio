import React, { useState } from 'react';

import './slider.css';

const Slider = () => {
	const [sliderShowing, setSlider] = useState(1);

	const onPrevClick = () => {
		if (sliderShowing === 1) {
			setSlider(4);
			return;
		}
		setSlider(sliderShowing - 1);
	}

	const onNextClick = () => {
		if (sliderShowing === 4) {
			setSlider(1);
			return;
		}
		setSlider(sliderShowing + 1);
	}

	return (
	   <div className="slider mb-3" id="gallery">
	   		<div className={`slide ${sliderShowing === 1 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider-1.jpg" alt="Carlos Hernández" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 2 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider-2.jpg" alt="Carlos Hernández" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 3 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider-3.jpg" alt="Carlos Hernández" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 4 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider-4.jpg" alt="Carlos Hernández" />
	   		</div>
			<a className="prev" onClick={() => onPrevClick()}>&#10094;</a>
			<a className="next" onClick={() => onNextClick()}>&#10095;</a>
			<div className="dots-control text-center">
				<span className={`dot ${sliderShowing === 1 ? 'dot-active' : null}`} onClick={() => setSlider(1)}></span>
				<span className={`dot ${sliderShowing === 2 ? 'dot-active' : null}`} onClick={() => setSlider(2)}></span>
				<span className={`dot ${sliderShowing === 3 ? 'dot-active' : null}`} onClick={() => setSlider(3)}></span>
				<span className={`dot ${sliderShowing === 4 ? 'dot-active' : null}`} onClick={() => setSlider(4)}></span>
			</div>
	   </div>
)};

export default Slider;