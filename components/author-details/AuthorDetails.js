import React from 'react';

import './author-details.css';

const AuthorDetails = () => (
     	<div className="row text-center author-div">
     		<div className="col-5">
     			<img src="./../../static/myself.jpg" className="d-block m-auto author rounded-circle"/>
     		</div>
     		<div className="col-7 py-3">
     			<h3><b>Carlos Hernández</b></h3>
     			<h6>Desarrollador Web</h6>
     		</div>
     	</div>
	);

export default AuthorDetails;