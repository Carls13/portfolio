import React from 'react';

import './skills-slider.css';

import { connect } from 'react-redux';
import { selectSkillsMessages } from './../../redux/translation/translation.selectors';

class SkillsSlider extends React.Component { 
	state = {
		serviceSlideIndex: 1,
		classNames: [
			'myServicesSlides service service-active',
			'myServicesSlides service w-20',
			'myServicesSlides service w-14',
			'myServicesSlides service w-11',
			'myServicesSlides service w-8',
		]
	};

	plusServiceSlides = (n) => {
		const { serviceSlideIndex } = this.state;
  		this.showServiceSlides(serviceSlideIndex + n);
	}

	showServiceSlides = (active) => {
		const { classNames } = this.state;

		var serviceSlides = 5;

		if (active > serviceSlides) {
			this.mapActiveToStyles(1);
		} else if (active < 1) {
			this.mapActiveToStyles(serviceSlides);
		} else {
			this.mapActiveToStyles(active);
		}
	}

	mapActiveToStyles = (active) => {
		const { classNames } = this.state;
	    switch (active) {
	        case 1:
				this.setState({
					serviceSlideIndex: active,
					classNames: [
						'myServicesSlides service service-active',
						'myServicesSlides service w-20',
						'myServicesSlides service w-14',
						'myServicesSlides service w-11',
						'myServicesSlides service w-8',
					]
				});
	            break;
	        case 2:
	        	this.setState({
	        		serviceSlideIndex: active,
					classNames: [
						'myServicesSlides service w-18',
						'myServicesSlides service service-active',
						'myServicesSlides service w-18',
						'myServicesSlides service w-12',
						'myServicesSlides service w-6',
					]
				});
	            break; 
	        case 3:
	        	this.setState({
	        		serviceSlideIndex: active,
					classNames: [
						'myServicesSlides service w-9',
						'myServicesSlides service w-18',
						'myServicesSlides service service-active',
						'myServicesSlides service w-18',
						'myServicesSlides service w-9',
					]
				});	
	            break;
	        case 4:
	            this.setState({
	            	serviceSlideIndex: active,
					classNames: [
						'myServicesSlides service w-6',
						'myServicesSlides service w-12',
						'myServicesSlides service w-18',
						'myServicesSlides service service-active',
						'myServicesSlides service w-18'
					]
				});
	            break;
	        case 5:
	        	this.setState({
	        		serviceSlideIndex: active,
					classNames: [
						'myServicesSlides service w-8',
						'myServicesSlides service w-11',
						'myServicesSlides service w-14',
						'myServicesSlides service w-20',
						'myServicesSlides service service-active',
					]
				});
	            break;
	    }
	};

	render(){
		const { classNames, serviceSlideIndex } = this.state;
		const { messages } = this.props;

		return (
		   <div className="row my-4">
				<div className="slideshow-container full-width">
					<div className="row services-list">
						<div className={classNames[0]} >
							<img src='./../../static/web.png' alt="Carlos Hernández" className="skill-icon"/>
							<h3 className="my-2"><b>{messages.HTML_TITLE}</b></h3>
							<p><b>{messages.HTML_DESCRIPTION}</b></p>
						</div>
						<div className={classNames[1]} >
							<img src='./../../static/responsive.png' alt="Carlos Hernández" className="skill-icon"/>
							<h3 className="my-2"><b>{messages.RESPONSIVE_TITLE}</b></h3>
							<p><b>{messages.RESPONSIVE_DESCRIPTION}</b></p>
						</div>
						<div className={classNames[2]} >
							<img src='./../../static/mockup.png' alt="Carlos Hernández" className="skill-icon"/>
							<h3 className="my-2"><b>{messages.MODERN_TITLE}</b></h3>
							<p><b>{messages.MODERN_DESCRIPTION}</b></p>
						</div>
						<div className={classNames[3]} >
							<img src='./../../static/react.png' alt="Carlos Hernández" className="skill-icon"/>
							<h3 className="my-2"><b>{messages.REACT_TITLE}</b></h3>
							<p><b>{messages.REACT_DESCRIPTION}</b></p>
						</div>
						<div className={classNames[4]} >
							<img src='./../../static/english.png' alt="Carlos Hernández" className="skill-icon"/>
							<h3 className="my-2"><b>{messages.ENGLISH_TITLE}</b></h3>
							<p><b>{messages.ENGLISH_DESCRIPTION}</b></p>
						</div>
						<a className="service-prev" onClick={() => this.plusServiceSlides(-1) }>&#10094;</a>
						<a className="service-next" onClick={() => this.plusServiceSlides(1) }>&#10095;</a>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  messages: selectSkillsMessages()(state),
})

export default connect(mapStateToProps)(SkillsSlider);