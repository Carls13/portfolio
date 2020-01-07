import React from 'react';
const SellingDiv = ({ image, text, reverse, backgroundColor }) =>  {

	const textDiv = 
					<div className={`col-lg-6 col-12 my-5`}>
						<div className={`p-5 info-text text-center`}>
		   		   			{ text }
		   				</div>
	   				</div>;

	return (
	   <div 
	   	className="px-4 py-4 row" 
	   	style={{
	   		backgroundColor,
	   		color: backgroundColor === 'white' ? 'black' : 'white'
	   	}}>
	   		{
	   			!reverse && textDiv
		   	}
	   		<div className={`col-lg-6 col-12 my-5 img-container`}>
	   			<img src={image} className="info-img center-image animation" alt="Welcome"/>
	   		</div>
	   		{
	   			reverse && textDiv
		   	}
		   	
	   </div>
)}
export default SellingDiv;