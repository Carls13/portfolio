import React from "react";

import PortfolioItem from './../portfolio-item/PortfolioItem';

import { connect } from 'react-redux';

function PortfolioList({ portfolio, short, forPersonal, highlight }){

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

const mapStateToProps = ({ data: { portfolio } }) => ({ portfolio });

export default connect(mapStateToProps)(PortfolioList);