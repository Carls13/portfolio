import React from "react";

import PortfolioItem from './../portfolio-item/PortfolioItem';

import { useSelector } from 'react-redux';

function PortfolioList({ short, forPersonal, highlight }){
	const portfolio = useSelector(state => state.data.portfolio)
    return (
		<React.Fragment>
	        {
	        	portfolio.filter((element) => {
	        		if (forPersonal) return element.personal;
	        		if (typeof(forPersonal) === 'undefined') return true;

	        		return !element.personal
	        	}).filter((element) => highlight ? element.highlight : true)
	        	.filter((element, i) => {
	        		if (short) return i < 3;

	        		return true;
	        	}).map((item, i) => {
	        		return <PortfolioItem item={item} key={i}/>
	        	})
	        }
   	</React.Fragment>
 	);
};

export default PortfolioList