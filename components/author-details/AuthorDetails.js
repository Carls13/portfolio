import React from 'react';

import './author-details.css';

const AuthorDetails = ({ author }) => {

	const { image, name, role } = author;
	const { url } = image.fields.file;

	return (
	     	<div className="row text-center">
	     		<div className="col-5">
	     			<img src={url} className="d-block m-auto author rounded-circle"/>
	     		</div>
	     		<div className="col-7 py-3">
	     			<h3><b>{name}</b></h3>
	     			<h6>{role}</h6>
	     		</div>
	     	</div>
	);
}

export default AuthorDetails;