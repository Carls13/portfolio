import React, { useState } from 'react';

import './slider.css';

import { connect } from 'react-redux';
import { selectMessages, selectLanguage } from '../../redux/translation/translation.selectors';

//Spanish images
const SLIDER1 = './../../static/slider-1.jpg';
const SLIDER2 = './../../static/slider-2.jpg';
const SLIDER3 = './../../static/slider-3.jpg';
const SLIDER4 = './../../static/slider-4.jpg';

//English images
const SLIDER1_ENGLISH = './../../static/slider-1-EN.jpg';
const SLIDER2_ENGLISH = './../../static/slider-2-EN.jpg';
const SLIDER3_ENGLISH = './../../static/slider-3-EN.jpg';
const SLIDER4_ENGLISH = './../../static/slider-4-EN.jpg';

const Slider = ({ language }) => {
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
	   			<img src={language === 'ES' ? SLIDER1 : SLIDER1_ENGLISH} alt="Carlos Hernández" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 2 ? 'slide-active' : null} text-center`}>
	   			<img src={language === 'ES' ? SLIDER2 : SLIDER2_ENGLISH} alt="Carlos Hernández" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 3 ? 'slide-active' : null} text-center`}>
	   			<img src={language === 'ES' ? SLIDER3 : SLIDER3_ENGLISH} alt="Carlos Hernández" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 4 ? 'slide-active' : null} text-center`}>
	   			<img src={language === 'ES' ? SLIDER4 : SLIDER4_ENGLISH} alt="Carlos Hernández" />
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

const mapStateToProps = (state) => ({
  language: selectLanguage(state),
})

export default connect(mapStateToProps)(Slider);