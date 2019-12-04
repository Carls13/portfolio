import React from 'react';

import './portfolio-item.css'

const PortfolioItem = ({ item }) => {
	const { title, description, link } = item;
	const image = item.preview.fields.file.url;

	return (
	   <div className="col-lg-4 col-12 p-4">
	    <img src={image} className="portfolio-image"/>
	    <h3 className="text-center">{title}</h3>
	    <p className="text-center">{description}</p>
	    <a className="text-center portfolio-link" href={link} target="_blank">
	    	<h5><b>Visitar sitio</b></h5>
    	</a>
	   </div>
	)}

export default PortfolioItem;