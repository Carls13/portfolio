import React from 'react';
import { Link } from './../../routes';

import './info-div.styles.css';

import { connect } from 'react-redux';
import { selectMessages } from '../../redux/translation/translation.selectors';

const InfoDiv = ({ text, image, inverted, title, imgSpace, textPosition, id, paramsToLink, messages }) => {

	const textDiv = 
		<div className={`col-lg-${12 - imgSpace} col-12 my-5`}>
			<div className={`p-1 info-text text-${textPosition}`}>
		   		{
		   			title && 
		   			<React.Fragment>
		   				<h1 className="mb-5 only-desktop"><b>{title}</b></h1>
		   				<h3 className="mb-5 only-mobile"><b>{title}</b></h3>

		   			</React.Fragment>
		   		}
	   				{text} &nbsp;
   				{
		   		paramsToLink && 
		   		<Link 
					route="article"
					params={paramsToLink}
					>
					<a className="text-center article-link mt-0">{messages.MORE}</a>
					</Link>
				}
			</div>
		</div>;

	return (
	   <div className="mx-4 row my-5 box-shadow"  id={`${id ? id : ''}`}>
	   		{
	   			!inverted && textDiv
		   	}
	   		<div className={`col-lg-${imgSpace} col-12 my-5 img-container`}>
	   			<img src={image} className="info-img center-image animation" alt="Welcome"/>
	   		</div>
	   		{
	   			inverted && textDiv
		   	}
		   	
	   </div>
	)
};

const mapStateToProps = (state) => ({
  messages: selectMessages('PREVIEW')(state)
})

export default connect(mapStateToProps)(InfoDiv);