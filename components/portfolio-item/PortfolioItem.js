import React, { Fragment } from 'react';

import { useNearScreen } from './../../helpers/useNearScreen.js';

import { connect } from 'react-redux';
import { selectMessages, selectLanguage } from './../../redux/translation/translation.selectors'

import './portfolio-item.css'

const PortfolioItem = ({ item, messages, language }) => {
  	const [show, element] = useNearScreen()

	const { title, description, link, englishDescription } = item;
	const image = item.preview.fields.file.url;

	return (
	   <div className="col-lg-4 col-12 p-4 portfolio" ref={element}>
   		{
   			show && 
   			<Fragment>
   				<img src={image} className="portfolio-image" alt="Proyecto Carlos Hernández" />
			    <h3 className="text-center">{title}</h3>
			    <p className="text-center">{language === 'ES' ? description : englishDescription}</p>
			    <a className="text-center portfolio-link" href={link} target="_blank">
		    		<h5><b>{messages.VISIT}</b></h5>
	    		</a>	
   			</Fragment>
   		}
	   </div>
	)}

const mapStateToProps = (state) => ({
  messages: selectMessages('PORTFOLIO')(state),
  language: selectLanguage(state),
});


export default connect(mapStateToProps)(PortfolioItem);