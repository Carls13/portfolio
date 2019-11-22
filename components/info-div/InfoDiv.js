import React from 'react';
import { Link } from './../../routes';

import './info-div.styles.css';

const InfoDiv = ({ text, image, inverted, title, imgSpace, textPosition, id, paramsToLink }) => {

	const textDiv = 
					<div className={`col-lg-${12 - imgSpace} col-12 my-5`}>
						<div className={`p-5 info-text text-${textPosition}`}>
		   		   		{
		   		   			title && <h1 className="mb-5"><b>{title}</b></h1>
		   		   		}
	   		   				{text} &nbsp;
   		   				{
					   		paramsToLink && 
					   		<Link 
								route="article"
								params={paramsToLink}
								>
								<a className="text-center article-link">Leer más</a>
								</Link>
		   				}
		   				</div>
	   				</div>;

	return (
	   <div className="mx-4 row my-5"  id={`${id ? id : ''}`}>
	   		{
	   			!inverted && textDiv
		   	}
	   		<div className={`col-lg-${imgSpace} col-12 my-5`}>
	   			<img src={image} className="info-img center-image animation" alt="Welcome"/>
	   		</div>
	   		{
	   			inverted && textDiv
		   	}
		   	
	   </div>
)}

export default InfoDiv;